const model = {

}

const operator = {
    "createOutput" : function() {
        const wrapper = document.getElementById('wrapper');
        const output = document.createElement('p');
        output.className = 'output';
        output.id = 'outPut';
        console.log(wrapper, output);
    },
    "evemtListeners" : function() {
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function() {
            operator.createOutput();
        });
    }
}

view = {
    "initDisplay" : function() {
        operator.evemtListeners();
    }
}
view.initDisplay();