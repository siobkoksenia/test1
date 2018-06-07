{"version":3,"sources":["link_panel.js"],"names":["BX","namespace","attr","Landing","Utils","join","random","setTextContent","isPlainObject","textToPlaceholders","findParent","UI","Panel","Link","id","data","Content","apply","this","arguments","layout","classList","add","overlay","appendFooterButton","Button","BaseButton","text","message","onClick","save","bind","className","hide","document","body","appendChild","instance","getInstance","title","prototype","constructor","__proto__","show","node","form","innerHTML","Block","Node","Form","BaseForm","manifest","name","field","getField","addField","clear","appendForm","call","EditorPanel","Text","Field","range","getSelection","getRangeAt","textField","BaseField","currentField","isEditable","link","cloneContents","querySelector","startContainer","tagName","href","target","getAttribute","remove","header","allowedTypes","LinkURL","TYPE_BLOCK","TYPE_PAGE","Main","options","params","type","push","TYPE_CATALOG","content","toString","siteId","site_id","landingId","filter","=TYPE","isChanged","setValue","getValue","value","removeAllRanges","addRange","enableEdit","tmpHref","selection","execCommand","anchorNode","parentElement","includes","hrefInput","getPlaceholderData","then","placeholdersData","replace","RegExp","attrs"],"mappings":"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","file":""}