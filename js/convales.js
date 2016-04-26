    function Validar(){
        var vjs = jQuery.noConflict();
        if(!document.contactform.name.value || document.contactform.name.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #name").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese Nombre</label>");
            document.contactform.name.focus();
        }
        else if(!document.contactform.company.value || document.contactform.company.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #company").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese Compañía</label>");
            document.contactform.company.focus();
        }
        else if(!document.contactform.id.value || document.contactform.id.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #id").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese ID</label>");
            document.contactform.id.focus();
        }
        else if(!document.contactform.idcom.value || document.contactform.idcom.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #idcom").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese ID de Compñía</label>");
            document.contactform.idcom.focus();
        }
        else if(!document.contactform.cargo.value || document.contactform.cargo.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #cargo").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese un Cargo</label>");
            document.contactform.cargo.focus();
        }
        else if(!document.contactform.fax.value || document.contactform.fax.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #fax").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese Fax</label>");
            document.contactform.fax.focus();
        }
        else if(!document.contactform.email.value || document.contactform.email.value == null
        	|| validate_email(vjs('#contactform #email').val())==false){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #email").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese Email Válido</label>");
            document.contactform.email.focus();
        }
        else if(!document.contactform.pais.value || document.contactform.pais.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #pais").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese un País</label>");
            document.contactform.pais.focus();
        }
        else if(!document.contactform.telefono.value || document.contactform.telefono.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #telefono").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese un Teléfono</label>");
            document.contactform.telefono.focus();
        }
        else if(!document.contactform.ciudad.value || document.contactform.ciudad.value == null){
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            vjs("#contactform #ciudad").parent().append("<label for='contactname' generated='true' class='error'>Por Favor Ingrese una Ciudad</label>");
            document.contactform.ciudad.focus();
        }
        else{
            vjs('#contactform #name').parent().find(".error").remove();
            vjs('#contactform #company').parent().find(".error").remove();
            vjs('#contactform #id').parent().find(".error").remove();
            vjs('#contactform #idcom').parent().find(".error").remove();
            vjs('#contactform #cargo').parent().find(".error").remove();
            vjs('#contactform #fax').parent().find(".error").remove();
            vjs('#contactform #email').parent().find(".error").remove();
            vjs('#contactform #pais').parent().find(".error").remove();
            vjs('#contactform #telefono').parent().find(".error").remove();
            vjs('#contactform #ciudad').parent().find(".error").remove();
            document.contactform.submit();
        }
    }
    function validate_email(address) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(address) == false) {
      return false;
   }
   else
   return true;
}