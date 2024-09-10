function sortear() {

    n1 = Math.floor(Math.random() * 60 + 1);

    n2 = Math.floor(Math.random() * 60 + 1);

    if (n2 != n1) {
        n3 = Math.floor(Math.random() * 60 + 1);

        if (n3 != n2 && n3 != n1) {
            n4 = Math.floor(Math.random() * 60 + 1);

            if (n4 != n3 && n4 != n2 && n4 != n1) {
                n5 = Math.floor(Math.random() * 60 + 1);

                if (n5 != n4 && n5 != n3 && n5 != n2 && n5 != n1) {
                    n6 = Math.floor(Math.random() * 60 + 1);
                    if (n6 != n5 && n6 != n4 && n6 != n3 && n6 != n2 && n6 != n1) {
                        numeros = `${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}`

                        document.getElementById('saida').innerHTML = `Os números sorteados são:<br> ${numeros}`
                    } else {
                        n6 = Math.floor(Math.random() * 60 + 1);
                        sortear();
                    }
                } else {
                    n5 = Math.floor(Math.random() * 60 + 1);
                    sortear();
                }
            } else {
                n4 = Math.floor(Math.random() * 60 + 1);
                sortear();
            }
        } else {
            n3 = Math.floor(Math.random() * 60 + 1);
            sortear();
        }
    } else {
        n2 = Math.floor(Math.random() * 60 + 1);
        sortear();
    }

}