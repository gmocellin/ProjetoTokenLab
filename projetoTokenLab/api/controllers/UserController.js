/**
 * UserController
 *
 * @description :: Server-side logic for managing User
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  eu: function (req, res) {
    /* *
      Requisitos: Estar logado
      Paramêtros: -
      Saida: Retorna o usuário logado

      Identifica o usuário logado
    */

    var context = {};
    context.status = 'error';

    try{
      User.findOne(req.user.id).exec(function(err, found){
        if(err) throw err;
        context.user = found;
        context.status = 'success';
        res.json(context);
      });
    } catch(err){
      res.json(context);
    }
  },

  new_user: function (req, res) {

    /* *
      Requisitos: -
      Paramêtros: name, username, password
      Saida: -

      Realiza o cadastro de um usuário com todas as caracteristicas passadas por parametro.
    */

    var context = {};
    context.status = 'error';

    var data = (req.body) ? req.body : undefined;
    if (data) {
      try {
        User.create(data).exec(function createCB(err, created){
          if(err) throw err;
          context.status = 'success';
          return res.json(context);
        });
      } catch (err) {
        return res.json(context);
      }
    }
    else
      return res.json(context);
  },

  update_user: function (req, res) {
    /* *
      Requisitos: Estar logado
      Paramêtros: name
      Saida: -

      Realiza o update de dados do usuário logado.
      So atualiza o nome. 
    */

    var context = {};
    context.status = 'error';

    var data = (req.body.formdata) ? req.body.formdata : undefined;
    if (data) {
      try {
        User.findOne(req.user.id).exec(function(err, result){
          if(err) throw err;
          if(result){
            User.update({id: req.user.id}, data).exec(function (err, updated){
              if(err) throw err;
              context.status = 'success';
              return res.json(context);
            });
          } 
          else
            return res.json(context);
        });
      } catch (err) {
        return res.json(context);
      }
    }
  
  },

  update_user_password: function (req, res) {
    /* *
      Requisitos: Estar logado
      Paramêtros: password, newpassword
      Saida: -

      Realiza o update da senha do usuário logado. 
    */
 
    var context = {};
    context.status = 'error';

    var data = (req.body.formdata) ? req.body.formdata : undefined;
    if (data) {
      var newData = {};
      newData.password = data.newpassword;
      try {
        User.findOne(req.user.id).exec(function(err, result){
          if(err) throw err;
          if(result){
            if (result.password == data.password){
              User.update({id: req.user.id}, newData).exec(function (err, updated){
                if(err) throw err;
                context.status = 'success';
                return res.json(context);
              });
            } else {
              context.status = 'notpassword';
              return res.json(context);
            }
          } 
          else
            return res.json(context);
        });
      } catch (err) {
        return res.json(context);
      }
    }
  
  },

  delete_user: function (req,res){
    /* *
      Requisitos: Estar logado
      Paramêtros: -
      Saida: -

      Deleta o usuário logado.
    */

    var context = {};
    context.status = 'error';

    var data = (req.body) ? req.body : undefined;
    if (data) {
      try {
        data.user = req.user.id;
        req.logout();
        User.destroy({where: {id: data.user}}).exec(function(err){
          if(err) throw err;
          context.status = 'success';
          return res.redirect('/');
        });
      } catch (err) {return res.json(context);}
    } else return res.json(context);
  }

};

