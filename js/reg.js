window.onload = function() {
    // 1.手机号验证(11位数字)
    var phonenumber = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var input1 = document.querySelector('.input1')
    var span1 = document.querySelector('.span1 span')
    var i1 = document.querySelector('.span1 i')
    input1.onblur = function() {
        if (phonenumber.test(this.value)) {
            span1.className = 'right';
            i1.className = 'success_icon';
            span1.innerHTML = '手机号输入正确'
        } else {
            span1.className = 'error';
            i1.className = 'error_icon';
            span1.innerHTML = '手机号输入错误'
        }
    };

    //2.验证码验证(6为数字)
    var yanzhengcode = /^\d{6}$/;
    var input2 = document.querySelector('.input2')
    var span2 = document.querySelector('.span2 span')
    var i2 = document.querySelector('.span2 i')
    input2.onblur = function() {
        if (yanzhengcode.test(this.value)) {
            span2.className = 'right';
            i2.className = 'success_icon';
            span2.innerHTML = '验证码输入正确'
        } else {
            span2.className = 'error';
            i2.className = 'error_icon';
            span2.innerHTML = '验证码输入错误'
        }
    };

}