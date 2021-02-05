# -*- coding: utf-8 -*-
import objectpath
import requests

APP_KEY = '填入信息'
APP_SECRET = '填入信息'
DOMAIN = 'https://oapi.dingtalk.com'

class DHelper():

    def __init__(self):
        self.access_token = self.getToken()

    # 获取Token
    def getToken(self):
        url = f"{DOMAIN}/gettoken"
        data = {
            "appkey": APP_KEY,
            "appsecret":APP_SECRET,
        }
        res_json = requests.get(url=url, params=data).json()
        print(res_json)
        return objectpath.Tree(res_json).execute("$.access_token")

    # 获取部门列表
    def getDepList(self):
        url = f"{DOMAIN}/department/list"
        data = {
            "access_token": self.access_token,
        }
        res_json = requests.get(url=url, params=data).json()
        return res_json

    # 获取部门人员
    def getDepUserList(self,dep_id):
        url = f"{DOMAIN}/topapi/user/listid?access_token={self.access_token}"
        body = {
            "dept_id":dep_id
        }
        res_json = requests.post(url=url, params=body).json()
        return res_json

    # 获取用户详细
    def getUserDetail(self,user_id):
        url = f"{DOMAIN}/topapi/v2/user/get?access_token={self.access_token}"
        body = {
            "language":"zh_CN",
            "userid":user_id
        }
        res_json = requests.post(url=url, params=body).json()
        return res_json