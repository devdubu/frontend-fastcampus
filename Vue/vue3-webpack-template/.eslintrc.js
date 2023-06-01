module.exports = {
    env:{
        browser: true,
        node: true
    },
    extends: [
        //vue
        // 'plugin:vue/vue3-essential', // LV1
        'plugin:vue/vue3-strongly-recommanded', // LV2
        // 'plugin:vue/vue3-recommnaded', // LV3
        //js
        'eslint:recommanded'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        //eslint 부분의 옵션이 우리에게 맞지 않는다면 해당 란에 eslint 수정 사항을 넣어주면 된다.
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
          }],
        "vue/html-self-=closing": ["error",{
            "html":{
                "void": "always",
                "normal":"never",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}
