function drag(elementID) {
    var element = document.querySelector('#' + elementID)
    element.setAttribute('draggable','true')
    addEventListener('dragend',function (e) {
        if (e.target === element){
            element.setAttribute('style',
                'position: absolute;' +
                ' top:' + e.y + 'px;' +
                ' left:' + e.x + 'px;'
            )
        }
    })
}

