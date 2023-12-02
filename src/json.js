export const json = {
    "title": "Assembly Demand Survey",
    "description": "Thank you for your interest in working with us.",
    "imageLink": "https://github.com/kcasl/survey/blob/main/logo.png",
    "questionErrorLocation": "bottom",
    "logoHeight": "100px",
    "logoFit": "cover",
    "logoPosition": "right",
    "elements": [{
      "type": "panel",
      "name": "personal-info",
      "title": "Information",
      "elements": [{
        "type": "text",
        "name": "name",
        "title": "이름",
        "isRequired": true
      }, {
        "type": "text",
        "name": "personalnum",
        "startWithNewLine": false,
        "title": "고유학번",
        "isRequired": true
      }]
    },{
    "type": "checkbox",
    "name": "asbl",
    "title": "나는 2024년 ASSEMBLY에 지원할 의향이 있다.",
    "description": "중복체크시 기록되지 않습니다.",
    "choices": ["네", "아니요"],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true,
    "showQuestionNumbers": false
    },{
      "type": "text",
      "name": "email",
      "title": "Email",
      "inputType": "email",
      "isRequired": true,
      "placeholder": "has_23xxx@hana.hs.kr"
    }, {
      "type": "text",
      "name": "needs",
      "title": "동아리에 들어와서 하고 싶은 것",
      "inputType": "text",
    }],
    "showQuestionNumbers": false,
    "completeText": "Send",
    "widthMode": "static",
    "width": "800px"
  };