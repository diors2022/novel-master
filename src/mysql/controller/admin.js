const db = require("../core/mysql.js");
const moment = require("moment");
const jwt = require("jwt-simple");
class AccountCountroller {
async getreader(request, response, next) {
    let getrdSql = " SELECT * FROM reader; ";
    let params = [];
    try {
      let result = await db.exec(getrdSql, params);
      if (result && result.length >= 1) {
        // console.log("访问服务器成功！"),
          response.json({
            code: 200,
            msg: "查询成功",
            data: result,
            token: "createToken(result)"
          });
      } else {
        response.json({
          code: 200,
          msg: "登录失败",
          data: result
        });
      }
    } catch (error) {
      //TODO handle the exception
      response.json({
        code: 200,
        msg: "服务器异常",
        error
      });
    }
    function createToken(data) {
      return jwt.encode(
        {
          exp: Date.now() + 1000 * 60 * 60 * 24,
          info: data
        },
        require("../config").tokenKey
      );
    }
  }
  async deletereader(request, response, next) {
    let delrdSql = "DELETE FROM reader WHERE readerid = ?;";
    let params = [request.body.readerid];
    try {
      let result = await db.exec(delrdSql, params);
      if (result && result.length >= 1) {
        // console.log("访问服务器成功！"),
          response.json({
            code: 200,
            msg: "删除成功",
          });
      } else {
        response.json({
          code: 200,
          msg: "登录失败",
        });
      }
    } catch (error) {
      //TODO handle the exception
      response.json({
        code: 200,
        msg: "服务器异常",
        error
      });
    }
    function createToken(data) {
      return jwt.encode(
        {
          exp: Date.now() + 1000 * 60 * 60 * 24,
          info: data
        },
        require("../config").tokenKey
      );
    }
  }
  //管理员获得所有的作者
  async getauthor(request, response, next) {
    let getatSql = " SELECT * FROM writer; ";
    let params = [];
    try {
      let result = await db.exec(getatSql, params);
      if (result && result.length >= 1) {
        // console.log("访问服务器成功！"),
          response.json({
            code: 200,
            msg: "查询成功",
            data: result,
            token: "createToken(result)"
          });
      } else {
        response.json({
          code: 200,
          msg: "登录失败",
          data: result
        });
      }
    } catch (error) {
      //TODO handle the exception
      response.json({
        code: 200,
        msg: "服务器异常",
        error
      });
    }
    function createToken(data) {
      return jwt.encode(
        {
          exp: Date.now() + 1000 * 60 * 60 * 24,
          info: data
        },
        require("../config").tokenKey
      );
    }
  }
  //从admin接受的作者名，以此查询他的作品
  async getauthorwork(request, response, next) {
    let getatwSql = " SELECT * FROM book WHERE writer = ? and status='1'; ";
    let params = [request.body.writer];
    try {
      let result = await db.exec(getatwSql, params);
      if (result && result.length >= 1) {
        // console.log("访问服务器成功！"),
          response.json({
            code: 200,
            msg: "查询成功",
            data: result,
            token: "createToken(result)"
          });
      } else {
        response.json({
          code: 200,
          msg: "登录失败",
          data: result
        });
      }
    } catch (error) {
      //TODO handle the exception
      response.json({
        code: 200,
        msg: "服务器异常",
        error
      });
    }
    function createToken(data) {
      return jwt.encode(
        {
          exp: Date.now() + 1000 * 60 * 60 * 24,
          info: data
        },
        require("../config").tokenKey
      );
    }
  }

   //删除作者
   async deleteauthor(request, response, next) {
    let getatSql = " DELETE FROM writer WHERE writerid = ?; ";
    let params = [request.body.id];
    try {
      let result = await db.exec(getatSql, params);
      if (result && result.length >= 1) {
        // console.log("访问服务器成功！"),
          response.json({
            code: 200,
            msg: "删除成功",
          });
      } else {
        response.json({
          code: 200,
          msg: "删除失败",
          data: result
        });
      }
    } catch (error) {
      //TODO handle the exception
      response.json({
        code: 200,
        msg: "服务器异常",
        error
      });
    }
    function createToken(data) {
      return jwt.encode(
        {
          exp: Date.now() + 1000 * 60 * 60 * 24,
          info: data
        },
        require("../config").tokenKey
      );
    }
  }
  //删除书籍
  async deletebook(request, response, next) {
    let delbSql = " DELETE FROM book WHERE id = ?; ";
    let params = [request.body.id];
    try {
      let result = await db.exec(delbSql, params);
      if (result && result.length >= 1) {
        // console.log("访问服务器成功！"),
          response.json({
            code: 200,
            msg: "删除成功",
          });
      } else {
        response.json({
          code: 200,
          msg: "删除失败",
          data: result
        });
      }
    } catch (error) {
      //TODO handle the exception
      response.json({
        code: 200,
        msg: "服务器异常",
        error
      });
    }
    function createToken(data) {
      return jwt.encode(
        {
          exp: Date.now() + 1000 * 60 * 60 * 24,
          info: data
        },
        require("../config").tokenKey
      );
    }
  }
  // //获取所有管理员
  // async getadmin(request, response, next) {
  //   let getSql = " SELECT * FROM admin; ";
  //   let params = [];
  //   try {
  //     let result = await db.exec(getSql, params);
  //     if (result && result.length >= 1) {
  //       // console.log("访问服务器成功！"),
  //         response.json({
  //           code: 200,
  //           msg: "查询成功",
  //           data: result,
  //           token: "createToken(result)"
  //         });
  //     } else {
  //       response.json({
  //         code: 200,
  //         msg: "登录失败",
  //         data: result
  //       });
  //     }
  //   } catch (error) {
  //     //TODO handle the exception
  //     response.json({
  //       code: 200,
  //       msg: "服务器异常",
  //       error
  //     });
  //   }
  //   function createToken(data) {
  //     return jwt.encode(
  //       {
  //         exp: Date.now() + 1000 * 60 * 60 * 24,
  //         info: data
  //       },
  //       require("../config").tokenKey
  //     );
  //   }
  // }
  // //删除管理员
  // async deleteadmin(request, response, next) {
  //   let getSql = " DELETE FROM admin WHERE adminid = ?; ";
  //   let params = [request.body.id];
  //   try {
  //     let result = await db.exec(getSql, params);
  //     if (result && result.length >= 1) {
  //       // console.log("访问服务器成功！"),
  //         response.json({
  //           code: 200,
  //           msg: "删除成功",
  //         });
  //     } else {
  //       response.json({
  //         code: 200,
  //         msg: "删除失败",
  //         data: result
  //       });
  //     }
  //   } catch (error) {
  //     //TODO handle the exception
  //     response.json({
  //       code: 200,
  //       msg: "服务器异常",
  //       error
  //     });
  //   }
  //   function createToken(data) {
  //     return jwt.encode(
  //       {
  //         exp: Date.now() + 1000 * 60 * 60 * 24,
  //         info: data
  //       },
  //       require("../config").tokenKey
  //     );
  //   }
  // }
	//获取审核的小说
	async getshbook(request, response, next) {
	  let getshSql = " SELECT * FROM book where status='0'; ";
	  let params = [];
	  try {
	    let result = await db.exec(getshSql, params);
	    if (result && result.length >= 1) {
	      // console.log("访问服务器成功！"),
	        response.json({
	          code: 200,
	          msg: "查询成功",
	          data: result,
	          token: "createToken(result)"
	        });
	    } else {
	      response.json({
	        code: 200,
	        msg: "登录失败",
	        data: result
	      });
	    }
	  } catch (error) {
	    //TODO handle the exception
	    response.json({
	      code: 200,
	      msg: "服务器异常",
	      error
	    });
	  }
	  function createToken(data) {
	    return jwt.encode(
	      {
	        exp: Date.now() + 1000 * 60 * 60 * 24,
	        info: data
	      },
	      require("../config").tokenKey
	    );
	  }
	}
	//通过审核
	async updateshSql(request, response, next) {
	    let upSql = " UPDATE book SET status='1' WHERE id = ? ; ";
	    let params = [request.body.id];
	    try {
	      let result = await db.exec(upSql, params);
	      if (result && result.affectedRows >= 1) {
	          response.json({
	            code: 200,
	            msg: "更新成功",
	            data: result,
	            token: "createToken(result)"
	          });
	      } else {
	        response.json({
	          code: 200,
	          msg: "更新失败",
	          data: result
	        });
			
	      }
	    } catch (error) {
	      //TODO handle the exception
	      response.json({
	        code: 200,
	        msg: "服务器异常",
	        error
	      });
	    }
	    function createToken(data) {
	      return jwt.encode(
	        {
	          exp: Date.now() + 1000 * 60 * 60 * 24,
	          info: data
	        },
	        require("../config").tokenKey
	      );
	    }
	  }

  
}
module.exports = new AccountCountroller();
