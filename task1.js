let obj1 = {
    name: "rithvik",
    age: 5
};

let obj2 = {
    age: 5,
    name: "rithvik"
};

let sameProperties = true;

for (var a in obj1) {
    console.log(a, obj1[a]);

    for (var b in obj2) {
        console.log(b, obj2[b]);

        if (a == b) {
            console.log("Both objects have the same property:", a);
            if (obj1[a] !== obj2[b]) {
                console.log("But their values are different.");
                sameProperties = false;
            }
        }
    }
}

if (sameProperties) {
    console.log("Both objects have the same properties.");
} else {
    console.log("Objects do not have the same properties or their values are different.");
}
