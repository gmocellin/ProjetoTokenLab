/**
 * ContactController
 *
 * @description :: Server-side logic for managing Tweet
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  new_contact: function (req, res) {
    /* *
      Requisitos: Estar logado
      Paramêtros: name, birthday, mail, address, phone
      Saida: -

      Faz um novo tweet do user logado, com as caracteristicas passadas como parâmetro 
    */

    var context = {};
    context.status = 'error';

    var data = (req.body.formdata) ? req.body.formdata : undefined;
    if (data) {
      try {
        data.user = req.user;
        data.birthday = new Date(data.birthday);

        Contact.create(data).exec(function createCB(err, created){
          if(err) throw err;
          data.contact = created;
          requester = req.user;
          requester.contacts.add(data.contact.id);
          requester.save(function(err, result) {
          if(err) throw err;
            context.status = 'success';
            res.json(context);
          });
        });
          
      } catch (err) {
        return res.json(context);
      }
    }
    else
      return res.json(context);
  },

  update_contact: function (req, res) {
    /* *
      Requisitos: Estar logado
      Paramêtros: name, birthday, mail, address, phone
      Saida: -

      Faz o update do contato do user logado, com as caracteristicas passadas como parâmetro 
    */

    var context = {};
    context.status = 'error';

    var data = (req.body.formdata) ? req.body.formdata : undefined;
    if (data) {
      newData = {};
      newData.name = data.name;
      newData.birthday = new Date(data.birthday);
      newData.mail = data.mail;
      newData.address = data.address;
      newData.phone = data.phone;
      try {
        Contact.findOne({where: {id: data.id}}).exec(function(err, result){
          if(err) throw err;
          if(result){
            if(result.user == req.user.id){
              Contact.update(result.id, newData).exec(function (err, updated){
                if(err) throw err;
                context.status = 'success';
                return res.json(context);
              });
            }
            else
              return res.json(context);
          }
          else
            return res.json(context);
        });
      } catch (err) {
        return res.json(context);
      }
    }
    else
      return res.json(context);
  },

  search_contact: function (req, res) {
    /* *
      Requisitos: Estar logado
      Paramêtros: name
      Saida: Retorna os contatos que possuam o nome passado

      Faz uma busca dos contatos pelo nome
    */

    var context = {};
    context.status = 'error';
    
    var data = (req.body) ? req.body : undefined;
    if (data) {
      try {
        Contact.find({name: {'contains': data.name}, user: req.user.id}).exec(function(err, result){
          if(err) throw err; 
          context.result = result;
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

  delete_contact: function (req,res){
    /* *
      Requisitos: Estar logado
      Paramêtros: id
      Saida: -

      Deleta o contato de "id", passado como parâmetro. O contato deve pertencer ao usuário logado. 
    */
    var context = {};
    context.status = 'error';

    var data = (req.body) ? req.body : undefined;
    if (data) {
      try {
        Contact.findOne({where: {id: data.id}}).exec(function(err, result){
          if(err) throw err;
          if(result){
            if(result.user == req.user.id){
              Contact.destroy({where: {id: result.id}}).exec(function (err){
                if(err) throw err;
                context.status = 'success';
                res.json(context);
              });
            }
            else
              return res.json(context);
          }
          else
            return res.json(context);
        });
      } catch (err) {return res.json(context);}
    } else return res.json(context);
  },

  my_contacts: function (req, res){
    /* *
      Requisitos: Estar logado
      Paramêtros: -
      Saida: Lista de contatos do usuário logado

      Busca todos os contatos do usuário logado e os retorna numa lista 
    */
    var context = {};
    context.status = 'error';


    var data = (req.body) ? req.body : undefined;
    if (data) {
      try {
        data.user = req.user.id;

        Contact.find({where: {user: data.user}}).sort('name ASC').exec(function(err,result) {
          if(err) throw err;
          context.result = result;
          context.status = 'success';
          return res.json(context);
        });
      } catch (err) {
        return res.json(context);
      }
    }
    else
      return res.json(context);
  }
};
