function switchTheme (node){
    if (node.nodeType ==  Node.ELEMENT_NODE)
    node.classList.toggle('darck');
    for (var i = 0; i < node.childNodes.length; i++)
    {
        console.log(node.childNodes [i]);
        switchTheme(node.childNodes[i]);
    }
}