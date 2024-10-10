function func1(){
    let a = [1, 2, 3];
    let l = 0, r = 2;
    function func2(){
    let l=3;
    r =4}
    console.log(l, r);
    func2();
    console.log(l, r);
    }
    func1();