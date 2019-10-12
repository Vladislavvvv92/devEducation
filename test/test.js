describe("function summ", function() {

    it("call function summ with args memoryNumber = 10, countNumber = 23 and return 33", function () {
        const a = 10;
        const b = 23;
        const exp = 33;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 0, countNumber = 45 and return 45", function () {
        const a = 0;
        const b = 45;
        const exp = 45;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 67, countNumber = 0 and return 67", function () {
        const a = 67;
        const b = 0;
        const exp = 67;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 1.1, countNumber = 8.9 and return 10", function () {
        const a = 1.1;
        const b = 8.9;
        const exp = 10;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 2.3, countNumber = 4.5 and return 15", function () {
        const a = 2.3;
        const b = 4.5;
        const exp = 6.8;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = -32, countNumber = 45 and return 13", function () {
        const a = -32;
        const b = 45;
        const exp = 13;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = -67, countNumber = 12 and return -55", function () {
        const a = -67;
        const b = 12;
        const exp = -55;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = -1.234567, countNumber = -1 and return -2.234567", function () {
        const a = -1.234567;
        const b = -1;
        const exp = -2.234567;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 0.0000001, countNumber = 1 and return 1.0000001", function () {
        const a = 0.0000001;
        const b = 1;
        const exp = 1.0000001;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
});

describe("function minus", function() {

    it("call function minus with args memoryNumber = 10, countNumber = 6 and return 4", function () {
        const a = 10;
        const b = 6;
        const exp = 4;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 15, countNumber = 0 and return 15", function () {
        const a = 15;
        const b = 0;
        const exp = 15;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 0, countNumber = 8 and return -8", function () {
        const a = 0;
        const b = 8;
        const exp = -8;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 5.5, countNumber = 3 and return 2.5", function () {
        const a = 5.5;
        const b = 3;
        const exp = 2.5;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -9, countNumber = 7 and return -16", function () {
        const a = -9;
        const b = 7;
        const exp = -16;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 0, countNumber = 8 and return -8", function () {
        const a = 0;
        const b = 8;
        const exp = -8;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -8.4, countNumber = 9.3 and return -17.7", function () {
        const a = -8.4;
        const b = 9.3;
        const exp = -17.7;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -9999, countNumber = 9999 and return -19998", function () {
        const a = -9999;
        const b = 9999;
        const exp = -19998;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -8.4, countNumber = 9.3 and return -17.7", function () {
        const a = -3232;
        const b = 3234;
        const exp = -6466;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 4.9999, countNumber = 5.3434 and return -0.3435", function () {
        const a = 4.9999;
        const b = 5.3434;
        const exp = -0.3435;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 2.1234567, countNumber = 1.9876543 and return 0.1358024", function () {
        const a = 2.1234567;
        const b = 1.9876543;
        const exp = 0.1350824;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 2.1234567, countNumber = 1.9876543 and return 0.1358024", function () {
        const a = 2.1234567;
        const b = 1.9876543;
        const exp = 0.1358024;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 21321.123, countNumber = 46.876, and return 21274.247", function () {
        const a = 21321.123;
        const b = 46.876;
        const exp = 21274.247;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 7123.545, countNumber = 1.3 and return 7122.245", function () {
        const a = 7123.545;
        const b = 1.3;
        const exp = 7122.245;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber =  -123.4, countNumber = 234342, and return -234465.4", function () {
        const a =  -123.4;
        const b = 234342;
        const exp = -234465.4;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 234.777, countNumber = 234.777 and return 0", function () {
        const a = 234.777;
        const b = 234.777;
        const exp = 0;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -465, countNumber = -2 and return -463", function () {
        const a = -465;
        const b = -2;
        const exp = -463;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
});

describe("function multiply", function() {

    it("call function multiply with args memoryNumber = 10, countNumber = 23 and return 230", function () {
        const a = 10;
        const b = 23;
        const exp = 230;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 0, countNumber = 45 and return 0", function () {
        const a = 0;
        const b = 45;
        const exp = 0;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 67, countNumber = 0 and return 0", function () {
        const a = 67;
        const b = 0;
        const exp = 0;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 1.1, countNumber = 8.9 and return 9.79", function () {
        const a = 1.1;
        const b = 8.9;
        const exp = 9.79;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 2.3, countNumber = 4.5 and return 10.35", function () {
        const a = 2.3;
        const b = 4.5;
        const exp = 10.35;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = -32, countNumber = 45 and return  -1440", function () {
        const a = -32;
        const b = 45;
        const exp =  -1440;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = -32, countNumber = 45 and return  1440", function () {
        const a = -32;
        const b = -45;
        const exp =  1440;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 0.9, countNumber = 0.3 and return  0.27", function () {
        const a = 0.9;
        const b = 0.3;
        const exp =  0.27;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 8.9, countNumber = 0.3 and return  2.67", function () {
        const a = 8.9;
        const b = 0.3;
        const exp =  2.67;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = -8, countNumber = -0.3 and return  2.4", function () {
        const a = -8;
        const b = -0.3;
        const exp =  2.4;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 8, countNumber = 3 and return  24", function () {
        const a = 8;
        const b = 3;
        const exp =  24;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 0.5, countNumber = 3 and return  1.5", function () {
        const a = 0.5;
        const b = 3;
        const exp =  1.5;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });


    it("call function multiply with args memoryNumber = 0.9545, countNumber = 1.356789 and return  1.2950551", function () {
        const a = 0.9545;
        const b = 1.356789;
        const exp =  1.2950551;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });

    it("call function multiply with args memoryNumber = 2.123456789, countNumber = 1.9876543 and return  4.2206980175", function () {
        const a = 2.123456789;
        const b = 1.9876543;
        const exp =  4.2206980;
        const act = multiply(a, b);

        assert.equal(act, exp);
    });
});

describe("function divisions", function() {

    it("call function divide with args memoryNumber = 10, countNumber = 23 and return 0.4347826", function () {
        const a = 10;
        const b = 23;
        const exp = 0.4347826;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 0, countNumber = 45 and return 0", function () {
        const a = 0;
        const b = 45;
        const exp = 0;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 67, countNumber = 0 and return 0", function () {
        const a = 67;
        const b = 0;
        const exp = 0;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 10, countNumber = 10 and return 1", function () {
        const a = 10;
        const b = 10;
        const exp = 1;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 333, countNumber = 44 and return 7.5681818", function () {
        const a = 333;
        const b = 44;
        const exp = 7.5681818;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 45.6, countNumber = 12.3 and return 3.7073170", function () {
        const a = 45.6;
        const b = 12.3;
        const exp = 3.7073170;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = -8.9, countNumber = 2 and return -4.45", function () {
        const a = -8.9;
        const b = 2;
        const exp = -4.45;
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = '-8.9', countNumber = 2 and return -4.45", function () {
        const a = '-8.9';
        const b = 2;
        const exp = 'не число';
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = -8.9, countNumber = '2' and return -4.45", function () {
        const a = -8.9;
        const b = '2';
        const exp = 'не число';
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = -8.9, countNumber = '2' and return -4.45", function () {
        const a = '-8.9';
        const b = '2';
        const exp = 'не число';
        const act = divide(a, b);

        assert.equal(act, exp);
    });
    it("call function divide with args memoryNumber = -8.9, countNumber = '2' and return -4.45", function () {
        const a = [1];
        const b = '2';
        const exp = 'не число';
        const act = divide(a, b);

        assert.equal(act, exp);
    });

});

    describe("function cutDisplay", function() {

        it("call function cutDisplay with args a = 1123123213221 and return 112312321 symbols", function () {
            const a   = '1123123213221';
            const exp = 112312321;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -1.123123213221 and return -1.123123 symbols", function () {
            const a   = '-1.123123213221';
            const exp = -1.123123;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 123 and return 123 symbols", function () {
            const a   = '123';
            const exp = 123;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -456 and return -456 symbols", function () {
            const a   = '-456';
            const exp = -456;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 0 and return 0 symbols", function () {
            const a   = '0';
            const exp = 0;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 1234567891 and return 123456789 symbols", function () {
            const a   = '1234567891';
            const exp = 123456789;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -123456789 and return -12345678 symbols", function () {
            const a   = '-123456789';
            const exp = -12345678;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -1.2345678 and return -1.234567 symbols", function () {
            const a   = '-1.2345678';
            const exp = -1.234567;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 1.23456789 and return 1.2345678 symbols", function () {
            const a   = '1.23456789';
            const exp = 1.2345678;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 1.23456789 and return 1.2345678 symbols", function () {
            const a   = '1.23456789';
            const exp = 1.2345678;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 33.56789987 and return 33.567899 symbols", function () {
            const a   = '33.56789987';
            const exp = 33.567899;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -33.56789987 and return -33.56789 symbols", function () {
            const a   = '-33.56789987';
            const exp = -33.56789;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 99999.98765 and return 99999.987 symbols", function () {
            const a   = '99999.98765';
            const exp = 99999.987;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -99999.98765 and return -99999.98 symbols", function () {
            const a   = '-99999.98765';
            const exp = -99999.98;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 33.56789987 and return 33.567899 symbols", function () {
            const a   = '33.56789987';
            const exp = 33.567899;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = 44444444.44444 and return 44444444 symbols", function () {
            const a   = '44444444.44444';
            const exp = 44444444;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -44444444.44444 and return -44444444 symbols", function () {
            const a   = '-44444444.44444';
            const exp = -44444444;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -0.143456789 and return -0.143456 symbols", function () {
            const a   = '-0.143456789';
            const exp = -0.143456;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });

        it("call function cutDisplay with args a = -0.143456789 and return -0.143456 symbols", function () {
            const a   = '-0.143456789';
            const exp = -0.143456;
            const act = cutDisplay(a);

            assert.equal(act, exp);
        });
    })