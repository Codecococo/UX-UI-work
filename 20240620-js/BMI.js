
// 輸入身高(M), 體重(kg) 
function validateNumberInput(event) {
    const input = event.target;
    let value = input.value;

    value = value.replace(/[^0-9.]/g, '');

    const dotIndex = value.indexOf('.');
    if (dotIndex !== -1) {
        value = value.slice(0, dotIndex + 1) + value.slice(dotIndex + 1).replace(/\./g, '');
    }

    input.value = value;
}

let btn = document.querySelector('#cu_btn');
    // 按下計算BMI按鈕
btn.addEventListener('click', function() {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    // 計算BMI> 體重/身高*身高
    // parsefloat 浮點數(完整數值)
    // parseInt 整數(四捨五入)
    
    let BMI = (parseFloat(weight)) / (((parseFloat(height)) / 100) * ((parseFloat(height)) / 100));
    BMI = BMI.toFixed(2);
    let show_01 = document.querySelector('.show_01');
    show_01.innerHTML = BMI;
    let show_02 = document.querySelector('.show_02');
    

    if (BMI < 18.5) {
        show_02.innerHTML = '過輕 <img src="https://i.pinimg.com/originals/7b/23/65/7b2365b5dac7dbf985c53a5679339ca7.jpg">';
    } else if ( BMI <= 24) {
        show_02.innerHTML = '正常 <img src="https://i.pinimg.com/originals/46/6e/be/466ebed2affc39641a60f5f2ab6f2328.jpg">';
    } else if ( BMI <= 27) {
        show_02.innerHTML = '輕度肥胖 <img src="https://i.pinimg.com/originals/94/fd/91/94fd9145ad234d1fc7f60a0075503de2.jpg">';
    } else if ( BMI <= 30) {
        show_02.innerHTML = '中度肥胖 <img src="https://i.pinimg.com/originals/b2/0e/b2/b20eb294f3b700c7d8bf14b7fe1c89a8.jpg">';
    } else if ( BMI <= 35) {
        show_02.innerHTML = '重度肥胖 <img src="https://i.pinimg.com/originals/9f/a8/12/9fa812fe1e852e798b37e265e89dbac5.jpg">';
    } else if ( BMI > 35) {
        show_02.innerHTML = '月巴月半est <img src="https://i.pinimg.com/originals/be/9a/7e/be9a7e464efba05f6037df8077ab081b.jpg">';
    }
})

// 將BMI結果分類成 過輕＜ 18.5 正常18.5≦BMI＜24 輕度肥胖24≦BMI＜27 中度肥胖27≦BMI＜30 重度肥胖30≦BMI＜35
// 
let computeElement = document.querySelector(".calculate");
function isdisplaycolor() {
    let displaycolor = document.querySelector(".displaycolor");
        if (displaycolor){
            displaycolor.classList.remove("displaycolor");
        }
}


function calculation(){
    let heightva = document.querySelector('.height').value;
    let weightva = document.querySelector('.weight').value;
    let weight = parseFloat(weightva);
    let height = parseFloat(heightva);

    if(isNaN(height) || isNaN(weight)){
        isdisplaycolor();
        alert("請輸入大於0之數字")
    } else{
        let BMI = (weight/((height/100)**2)).toFixed(2);
        
        isdisplaycolor(); //初始化表格底色
        if (BMI < 18.5) {
            document.querySelector(".underweight").classList.add("displaycolor");
        } else if (BMI <= 24) {
            document.querySelector(".normal").classList.add("displaycolor");
        } else if (BMI <= 27) {
            document.querySelector(".mildobesity").classList.add("displaycolor");
        } else if (BMI <= 30) {
            document.querySelector(".moderatelyobese").classList.add("displaycolor");
        } else if (BMI <= 35) {
            document.querySelector(".severeobesity").classList.add("displaycolor");
        } else {
            document.querySelector(".extremelyobese").classList.add("displaycolor");
            console.log(BMI);
        }

    }
}
computeElement.addEventListener("click",calculation);
