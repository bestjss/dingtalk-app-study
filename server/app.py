# -*- coding: utf-8 -*-
from flask import Flask,jsonify
from dhelper import DHelper 

app = Flask(__name__)
app.config.from_pyfile('setting.py')


@app.route('/')
def hello_world():
    return 'Hello, World! ' + app.config['APP_NAME']

@app.route('/token')
def token():
    dhelp = DHelper()
    rst = dhelp.getToken()
    return rst

@app.route('/department')
def getDepList():
    dhelp = DHelper()
    rst = dhelp.getDepList()
    return jsonify(rst)

@app.route('/department/<id>/users')
def getDepUserList(id):
    dhelp = DHelper()
    rst = dhelp.getDepUserList(id)
    return jsonify(rst)

@app.route('/user/<id>')
def getUserDetail(id):
    dhelp = DHelper()
    rst = dhelp.getUserDetail(id)
    return jsonify(rst)


# Run
if __name__ == '__main__':
    app.debug = True 
    # app.run(host = app.config['HOST'], port = app.config['PORT'])
    app.run()