module.exports = {
  "POST:/Users/login": (req, res)=>{
    const { email, password } = req.body;
    if(email === '1035833455@qq.com' && password === '123456'){
      res.status(200).send({
        "position":{
          "id":378,
          "name":"admin",
          "description":"管理员",
          "company_id":89
        },
        "user":{
          "id":485,
          "username":"admin",
          "email":"1035833455@qq.com",
          "companyId":null,
          "password":"$2b$10$2NfDa0lQpz/TpxIa0.FdNupK3b186paqJu16Y8iCTQZ5DHZI1/Kk6",
          "positionId":null,
          "team_id":null,
          "registration_date":null,
          "realm":null,
          "emailVerified":0,
          "verificationToken":null,
          "company_id":{
            "id":89,
            "name":"海洋测试",
            "remark":null,
            "type":"销冠demo",
            "create_timestamp":null,
            "status":1
          },
          "position_id":{
            "id":378,
            "name":"admin",
            "description":"管理员",
            "company_id":89
          }
        },
        "ttl":1209600,
        "userId":485,
        "company":{
          "id":89,
          "name":"海洋测试",
          "remark":null,
          "type":"销冠demo",
          "create_timestamp":null,
          "status":1
        },
        "id":"UrHvKjhHjYq9Bb5BFD0ZMQ61tLofRHfPa2pAAjShJksi8mLqobCH7R8nbMwcgGwj"
      });
    } else if (email === 'zhuguan@qq.com' && password === '123456') {
      res.status(200).send({
        "userId":486,
        "ttl":1209600,
        "id":"48AeklkPT5tuS4Sp2fyEDJ86iirKD4pcPdRgqTJIaeiYd3h2spPaf7WoHKMJVuo4",
        "company":{
          "id":89,
          "name":"海洋测试",
          "remark":null,
          "type":"销冠demo",
          "create_timestamp":null,
          "status":1
        },
        "position":{
          "id":376,
          "name":"sales-manager",
          "description":"销售主管",
          "company_id":89
        },
        "user":{
          "id":486,
          "username":"主管",
          "email":"zhuguan@qq.com",
          "companyId":null,
          "password":"$2b$10$a000paTxIjMF8VC5dwM.eOXV2Bpx5eCtOFjvic.OXt3nNQYvlOPNW",
          "positionId":null,
          "team_id":44,
          "registration_date":1537947226,
          "realm":null,
          "emailVerified":0,
          "verificationToken":null,
          "company_id":{
            "id":89,
            "name":"海洋测试",
            "remark":null,
            "type":"销冠demo",
            "create_timestamp":null,
            "status":1
          },
          "position_id":{
            "id":376,
            "name":"sales-manager",
            "description":"销售主管",
            "company_id":89
          }
        }
      });
    } else {
      res.status(500).send('err');
    }
  },
  "GET:/User": {
    "count":1,
    "result":[
      {
        "id":485,
        "username":"admin",
        "email":"1035833455@qq.com",
        "companyId":null,
        "password":"$2b$10$2NfDa0lQpz/TpxIa0.FdNupK3b186paqJu16Y8iCTQZ5DHZI1/Kk6",
        "positionId":null,
        "team_id":null,
        "registration_date":null,
        "realm":null,
        "emailVerified":0,
        "verificationToken":null,
        "company_id":{
          "id":89,
          "name":"海洋测试",
          "remark":null,
          "type":"销冠demo",
          "create_timestamp":null,
          "status":1
        },
        "position_id":{
          "id":378,
          "name":"admin",
          "description":"管理员",
          "company_id":89
        }
      }
    ]
  },
  "GET:/GetPosition": [
    {
      "id":373,
      "name":"manager",
      "description":"质检主管",
      "company_id":89
    },
    {
      "id":374,
      "name":"qa",
      "description":"质检专员",
      "company_id":89
    },
    {
      "id":375,
      "name":"salesman",
      "description":"坐席",
      "company_id":89
    },
    {
      "id":376,
      "name":"sales-manager",
      "description":"销售主管",
      "company_id":89
    },
    {
      "id":377,
      "name":"sales-majordomo",
      "description":"销售总监",
      "company_id":89
    }
  ],
  "POST:/Users/change-password": (req, res)=>{
    res.status(201).send('success');
  },
  "GET:/KnowledgeGroups": [
    {
      "id":37,
      "company_id":89,
      "title":"A",
      "description":"description",
      "count":1
    },
    {
      "id":38,
      "company_id":89,
      "title":"B",
      "description":"des",
      "count":null
    }
  ],
  "GET:/GroupedKnowledges": {
    "id":37,
    "company_id":89,
    "title":"A",
    "description":"description",
    "group_knowledges":[]
  },
  "GET:/KnowledgeTagGroups": [
    {
      "id":17,
      "company_id":89,
      "title":"admin",
      "knowledgetaggroup_tag":[]
    },
    {
      "id":18,
      "company_id":89,
      "title":"6666",
      "knowledgetaggroup_tag":[]
    }
  ],
  "GET:/StageConfigs": [
    {
      "in_use":1,
      "ideas":[
        {
          "id":174,
          "name":"1",
          "config_id":1492,
          "type":"idea",
          "order":1,
          "parent_id":173,
          "in_use":1,
          "comment":"12"
        }
      ],
      "order":1,
      "id":173,
      "name":"11"
    },
    {
      "in_use":1,
      "ideas":[
        {
          "id":176,
          "name":"343",
          "config_id":1493,
          "type":"idea",
          "order":1,
          "parent_id":175,
          "in_use":1,
          "comment":"343434"
        }
      ],
      "order":2,
      "id":175,
      "name":"2343"
    }
  ],
  "GET:/sales_ai_coach/v20180814/api/conversation_list": {
    "count": 12,
    "data": [
      {
        "conversation_id": 0,
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": 1,
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "343t56sdfgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "sd343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "343sdft56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "3435343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "545343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "34563t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "455634356t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 90836,
        "last_call_create_timestamp": 1538040890836,
        "count": 9
      },
      {
        "conversation_id": "898343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "398943t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      },
      {
        "conversation_id": "34944563t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "last_call_duration_ms": 2,
        "last_call_create_timestamp": 2014,
        "count": 9
      }
    ]
  },
  "GET:/sales_ai_coach/v20180814/api/get_user_list": [
    {
      "username": "张三",
      "id": 123
    },
    {
      "username": "张四",
      "id": 456
    },
    {
      "username": "张五",
      "id": 789
    },
  ],
  "GET:/sales_ai_coach/v20180814/api/conversation/:conversation_id": {
    "conversation_id": 0,
    "called_no": "18802488888",
    "create_timestamp": 0,
    "audio_file_url": "https://kzy-audio.oss-cn-beijing.aliyuncs.com/51%2Fupload%2F824769CA-1F5D-4D5C-8239-0073FFE63964.wav?Signature=F0OeDcUljaVOZawxvbOudeELiYk%3D&Expires=1538452256&OSSAccessKeyId=LTAIVj6pwzQw0ewd",
    "duration_ms": 94575,
    "sentences": [
      {
        "sentence_id": 0,
        "begin_ms": 1234598,
        "end_ms": 1298625,
        "speaker": 0,
        "text": "string1"
      },
      {
        "sentence_id": 1,
        "begin_ms": 1434598,
        "end_ms": 1798625,
        "speaker": 1,
        "text": "string2"
      },
      {
        "sentence_id": 2,
        "begin_ms": 1234598,
        "end_ms": 1298625,
        "speaker": 0,
        "text": "string1"
      },
    ],
    "events": [
      {
        "sentence_id": 0,
        "title": "思路导航",
        "content": "content1"
      },
      {
        "sentence_id": 2,
        "title": "思路导航",
        "content": "content1"
      },
      {
        "sentence_id": 1,
        "title": "敏感词名称",
        "content": "666666"
      },
      {
        "sentence_id": 0,
        "title": "推荐知识点",
        "content": "content1"
      },
      {
        "sentence_id": 2,
        "title": "sales_speed",
        "content": "88"
      },
      {
        "sentence_id": 3,
        "title": "total_break_customer",
        "content": "75"
      },
      {
        "sentence_id": 4,
        "title": "sales_talk_proportion",
        "content": "53"
      },
      {
        "sentence_id": 4,
        "title": "sales_nonsense_word_rate",
        "content": "1"
      },
    ]
  },
  "GET:/sales_ai_coach/v20180814/api/conversation/get_conversation_list_with_conversation_id/tem1": [
    {
      "conversation_id": 0,
      "username": "name1",
      "create_timestamp": 1538040890889
    },
    {
      "conversation_id": 1,
      "username": "name2",
      "create_timestamp": 1538040894789
    }
  ],
  "GET:/sales_ai_coach/v20180814/api/conversation/expression_specification_avg/tem2": {
    "sales_nonsense_word_rate": 5,
    "sales_talk_proportion": 80,
    "total_break_customer": 11,
    "sales_speed": 99,
    "customer_question_num": 3,
    "sales_question_num": 8,
    "conversion_rate": 49
  },
  "PUT:/sales_ai_coach/v20180814/api/app/:id": (req, res)=>{
    res.send('ok');
  },
  "DELETE:/sales_ai_coach/v20180814/api/app": (req, res)=>{
    res.status(204).send('success');
  },
}
