(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['locate.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\nvar Alpaca = $.alpaca;\n\n	Alpaca.registerView ({\n		\"id\": \"base\",\n		\"messages\": {\n			\"pt_BR\": {\n				required: \"Este campo é obrigatório\",\n				invalid: \"Este campo é inválido\",\n				months: [\"Janeiro\", \"Fevereiro\", \"Março\", \"Abril\", \"Maio\", \"Junho\", \"Julho\", \"Agosto\", \"Setembro\", \"Outubro\", \"Novembro\", \"Dezembro\"],\n				timeUnits: {\n					SECOND: \"segundos\",\n					MINUTE: \"minutos\",\n					HOUR: \"horas\",\n					DAY: \"dias\",\n					MONTH: \"meses\",\n					YEAR: \"anos\"\n				},\n				\"notOptional\": \"Este campo não é opcional.\",\n				\"disallowValue\": \"{0} são valores proibidas.\",\n				\"invalidValueOfEnum\": \"Este campo deve ter um dos seguintes valores: {0}. [{1}]\",\n				\"notEnoughItems\": \"O número mínimo de elementos é {0}\",\n				\"tooManyItems\": \"O número máximo de elementos é {0}\",\n				\"valueNotUnique\": \"Os valores não são únicos\",\n				\"notAnArray\": \"Este valor não é uma lista\",\n				\"invalidDate\": \"Esta data não tem o formato {0}\",\n				\"invalidEmail\": \"Endereço de email inválida, ex: info@cloudcms.com\",\n				\"stringNotAnInteger\": \"Este valor não é um número inteiro.\",\n				\"invalidIPv4\": \"Endereço IPv4 inválida, ex: 192.168.0.1\",\n				\"stringValueTooSmall\": \"O valor mínimo para este campo é {0}\",\n				\"stringValueTooLarge\": \"O valor máximo para este campo é {0}\",\n				\"stringValueTooSmallExclusive\": \"O valor deste campo deve ser maior que {0}\",\n				\"stringValueTooLargeExclusive\": \"O valor deste campo deve ser menor que {0}\",\n				\"stringDivisibleBy\": \"O valor deve ser divisível por {0}\",\n				\"stringNotANumber\": \"Este valor não é um número.\",\n				\"invalidPassword\": \"Senha inválida\",\n				\"invalidPhone\": \"Número de telefone inválido, ex: (123) 456-9999\",\n				\"invalidPattern\": \"Este campo deve ter o padrão {0}\",\n				\"stringTooShort\": \"Este campo deve incluir pelo menos {0} caracteres\",\n				\"stringTooLong\": \"Este campo pode incluir no máximo {0} caracteres\"\n			}\n		}\n	});\n	\n	$.alpaca.setDefaultLocale(\"pt_BR\");\n";
},"useData":true});
})();