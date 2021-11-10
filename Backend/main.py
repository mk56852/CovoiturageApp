#!/usr/bin/env python
# coding: utf-8

# In[1]:


import firebase_admin
from firebase_admin import credentials, db, firestore
from flask import Flask, request
from flask_cors import CORS, cross_origin
import hashlib
import http.client, urllib.parse
import json


# In[ ]:





# In[2]:


cred = credentials.Certificate("learningproject-980c3-firebase-adminsdk-bzcox-752aa7e0b8.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://learningproject-980c3-default-rtdb.firebaseio.com/'})
database = firestore.client()
conn = http.client.HTTPConnection('api.positionstack.com')
users = database.collection("Users")
offers = database.collection("Offers")

def getAddress(x, y):
    params = urllib.parse.urlencode({
        'access_key': '21e195d8b957e6fb2bae9e55ad0351a0',
        'query': str(x) + ", " + str(y),
    })
    conn.request('GET', '/v1/reverse?{}'.format(params))
    res = conn.getresponse()
    data = res.read()
    return json.loads(data.decode('unicode-escape'))['data'][0]['label']

app = Flask(__name__)
cors = CORS(app)

@app.route('/signup', methods=["POST"])
@cross_origin()
def signup():
    data = request.get_json(force=True)
    data['password'] = hashlib.sha1(data['password'].encode('utf-8')).hexdigest()
    users.add(data)
    for x in users.where("email", "==", data['email']).where("password", "==",data['password']).stream():
        return dict({"key" : x.id})
    return dict({"key": "error"})

@app.route('/login', methods=["POST"])
@cross_origin()
def login():
    data = request.get_json(force=True)
    for x in users.where("email", "==", data['email']).where("password", "==", hashlib.sha1(data['password'].encode('utf-8')).hexdigest()).stream():
        return dict({"key" : x.id}) , 200
    return dict({"key": "error"})

@app.route('/updatePosition', methods=["POST"])
@cross_origin()
def updatePosition():
    data = request.get_json(force=True)
    ndata= users.document(data["id"]).get().to_dict()
    ndata['position'] = data["position"]
    users.document(data["id"]).set(ndata)
    return dict({"status": "success"})

@app.route('/getPosition', methods=["GET"])
@cross_origin()
def getPosition():
    return dict({"position": users.document(request.args.get('id')).get().to_dict()['position']})

@app.route('/addOffer', methods=["POST"])
@cross_origin()
def addOffer():
    data = request.get_json(force=True)

    offers.add(data)
    return dict({"status": "success"})

@app.route('/deleteOffer', methods=["GET"])
@cross_origin()
def deleteOffer():
    offers.document(request.args.get('id')).delete()
    return dict({"status": "success"})

@app.route('/updateAccount', methods=["POST"])
@cross_origin()
def updateAccount():
    data = request.get_json(force=True)
    id = data['id']
    del data['id']
    users.document(id).set(data)
    return dict({"status": "success"})

@app.route('/getUserById', methods=["GET"])
@cross_origin()
def getUserById():
    return users.document(request.args.get('id')).get().to_dict()

@app.route('/updatePassword', methods=["POST"])
@cross_origin()
def updatePassword():
    data = request.get_json(force=True)
    id = data['id']
    del data['id']
    if hashlib.sha1(data['oldPassword'].encode('utf-8') == users.document(id).get().to_dict())['password']:
        del data['oldPassword']
        users.document(id).set(data)
        return dict({"status": "success"}) 
    return dict({"status": "error"})


@app.route('/getOfferById', methods=["GET"])
@cross_origin()
def getOfferById():
    return offers.document(request.args.get('id')).get().to_dict()


@app.route('/getOffers', methods=["GET"])
@cross_origin()
def getOffers():
    r = {}
    for doc in offers.stream():
        r[doc.id] = doc.to_dict()
    return r


@app.route('/updateTrip', methods=["POST"])
@cross_origin()
def updateTrip() : 
    data = request.get_json(force=True) 
    ndata= users.document(data["id"]).get().to_dict()
    ndata['tripId'] = data["tripId"] 
    users.document(data["id"]).set( ndata ) 
    return dict({"status": "success"})

@app.route('/rejoindre', methods=["POST"])
@cross_origin()

def rejoindre():
    data = request.get_json(force=True)
    idMembre = data['idMembre']
    idOffer = data['idOffer']
    ndata = offers.document(idOffer).get().to_dict()
    pub = ndata['publicationInfo']
    members = pub['membres']
    members.append(idMembre)
    pub['membres'] = members
    ndata['publicationInfo'] = pub
    offers.document(idOffer).set(ndata)
    print(ndata)
    return dict({"status": "success"})



if __name__ == '__main__':
    app.run(host="0.0.0.0")


# In[ ]:





# In[ ]:




