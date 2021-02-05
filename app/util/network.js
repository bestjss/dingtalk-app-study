export default {
  getDepartment() {
    return new Promise((resolve, reject) => {
      dd.httpRequest({
        headers: {
          "Content-Type": "application/json"
        },
        url: 'http://服务器地址/department',
        method: 'GET',
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        },
        complete: function (res) {
          // dd.alert({content: 'complete'});
          console.log('complete')
        }
      });
    }).catch(err => {
      console.log(err)
      reject(res)
    })

  }
}