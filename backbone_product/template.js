ANFApp = ANFApp || {};
ANFApp.template = ANFApp.template || {};

ANFApp._global = ANFApp._global || {};
ANFApp._global.template = ANFApp._global.template || {};


// {
// 		cid : <string>
// 		name : <string>
// 		selected : <boolean>
// 		disabled : <boolean>
// 		value : <string>
// 		text : <string>
// }
ANFApp._global.template.Radio = "<label for='<%= cid %>'><input type='radio' name='<%= name%>' id='<%= cid %>' selected='<%= selected %>' disabled='<%= disabled %>' value='<%= value %>'/><%= text%></label>";

ANFApp.template._product = ANFApp.template._product || {};

ANFApp.template._product.Price = "<span class='list redline'><%= list.formated%></span><span class='offer'><%= offer.formated%>";
ANFApp.template._product.Product = "<section><header><%= name %></header><img src='http://anf.scene7.com/is/image/anf/anf_<%= collection %>_<%= currentSelectedSeq %>_prod1'/><ul><li><%= shortDesc %></li><li class='product__price'></li><li class='product__seqs'></li><li class='product__sizes'></li></ul></section>";

