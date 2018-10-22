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
    } else if (email === 'salesman@qq.com' && password === '123456') {
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
          "name":"salesman",
          "description":"销售",
          "company_id":89
        },
        "user":{
          "id":486,
          "username":"销售",
          "email":"salesman@qq.com",
          "companyId":null,
          "password":"$2b$10$a000paTxIjMF8VC5dwM.eOXV2Bpx5eCtOFjvic.OXt3nNQYvlOPNW",
          "positionId":null,
          "team_id":44,
          "registration_date":1537947226,
          "realm": "销冠demo",
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
            "name":"salesman",
            "description":"销售",
            "company_id":89
          }
        }
      });
    } else if (email === 'majordomo@qq.com' && password === '123456') {
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
          "name":"sales-majordomo",
          "description":"总监",
          "company_id":89
        },
        "user":{
          "id":486,
          "username":"总监",
          "email":"majordomo@qq.com",
          "companyId":null,
          "password":"$2b$10$a000paTxIjMF8VC5dwM.eOXV2Bpx5eCtOFjvic.OXt3nNQYvlOPNW",
          "positionId":null,
          "team_id":44,
          "registration_date":1537947226,
          "realm": "销冠demo",
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
            "name":"sales-majordomo",
            "description":"总监",
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
        "user_name": "销售11",
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
        "user_name": "销售11",
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
        "user_name": "销售11",
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
        "user_name": "销售11",
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
    "flag": true,
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
        "content": "2"
      },
      {
        "sentence_id": 3,
        "title": "total_break_customer",
        "content": "75"
      },
      {
        "sentence_id": 4,
        "title": "sales_talk_proportion",
        "content": "0.23"
      },
      {
        "sentence_id": 4,
        "title": "sales_nonsense_word_rate",
        "content": "1"
      },
      {
        "sentence_id": 4,
        "title": "user_profile_demand",
        "content": 80
      },
      {
        "sentence_id": 4,
        "title": "user_profile_name",
        "content": "客户"
      },
      {
        "sentence_id": 4,
        "title": "user_profile_phone_number",
        "content": "18888888888"
      },
      {
        "sentence_id": 4,
        "title": "user_profile_business_type",
        "content": "232"
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
    "sales_talk_proportion": 0.8,
    "total_break_customer": 11,
    "sales_speed": 1,
    "customer_question_num": 3,
    "sales_question_num": 8,
    "conversion_rate": 49
  },
  "GET:/sales_ai_coach/v20180814/api/keyword_group_list": {
    "count": 12,
    "data": [
      {
        "id": 0,
        "speaker": 0,
        "in_use": 0,
        "group_name": "敏感词组1",
        "comment": "一段备注",
        "keyword": [
          {
            "word": "敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 1,
        "speaker": 1,
        "in_use": 1,
        "group_name": "敏感词组2",
        "comment": "一段备注0",
        "keyword": [
          {
            "word": "00敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "00敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 2,
        "speaker": 0,
        "in_use": 0,
        "group_name": "敏感词组1",
        "comment": "一段备注",
        "keyword": [
          {
            "word": "敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 3,
        "speaker": 1,
        "in_use": 1,
        "group_name": "敏感词组2",
        "comment": "一段备注0",
        "keyword": [
          {
            "word": "00敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "00敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 4,
        "speaker": 0,
        "in_use": 0,
        "group_name": "敏感词组1",
        "comment": "一段备注",
        "keyword": [
          {
            "word": "敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 5,
        "speaker": 1,
        "in_use": 1,
        "group_name": "敏感词组2",
        "comment": "一段备注0",
        "keyword": [
          {
            "word": "00敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "00敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 6,
        "speaker": 0,
        "in_use": 0,
        "group_name": "敏感词组1",
        "comment": "一段备注",
        "keyword": [
          {
            "word": "敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 7,
        "speaker": 1,
        "in_use": 1,
        "group_name": "敏感词组2",
        "comment": "一段备注0",
        "keyword": [
          {
            "word": "00敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "00敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 8,
        "speaker": 0,
        "in_use": 0,
        "group_name": "敏感词组1",
        "comment": "一段备注",
        "keyword": [
          {
            "word": "敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 9,
        "speaker": 1,
        "in_use": 1,
        "group_name": "敏感词组2",
        "comment": "一段备注0",
        "keyword": [
          {
            "word": "00敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "00敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 10,
        "speaker": 0,
        "in_use": 0,
        "group_name": "敏感词组1",
        "comment": "一段备注",
        "keyword": [
          {
            "word": "敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      },
      {
        "id": 11,
        "speaker": 1,
        "in_use": 1,
        "group_name": "敏感词组2",
        "comment": "一段备注0",
        "keyword": [
          {
            "word": "00敏感词001",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          },
          {
            "word": "00敏感词002",
            "type": "string",
            "keyword_group_id": 0,
            "company_id": 0
          }
        ]
      }
    ]
  },
  "POST:/sales_ai_coach/v20180814/api/keyword_group/create": (req, res)=>{
    res.status(201).send('ok');
  },
  "GET:/sales_ai_coach/v20180814/api/keyword_group/:id": {
    "id": 9,
    "speaker": 1,
    "in_use": 1,
    "group_name": "敏感词组2",
    "comment": "一段备注0",
    "keyword": [
      {
        "id": 0,
        "word": "00敏感词001",
        "type": "string",
        "keyword_group_id": 0,
        "company_id": 0
      },
      {
        "id": 2,
        "word": "00敏感词002",
        "type": "string",
        "keyword_group_id": 0,
        "company_id": 0
      }
    ]
  },
  "POST:/sales_ai_coach/v20180814/api/keyword_group/:id/change": (req, res)=>{
    res.status(201).send('ok');
  },
  "POST:/sales_ai_coach/v20180814/api/keyword_group/:id/delete": (req, res)=>{
    res.status(204).send('success');
  },
  "POST:/sales_ai_coach/v20180814/api/keyword_group/:id/change_use": (req, res)=>{
    res.status(201).send('ok');
  },
  "GET:/sales_ai_coach/v20180814/api/get_keyword_event_list": {
    "count": 12,
    "data": [
      {
        "conversation_id": 0,
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 2,
        "create_timestamp": 201434334,
        "keyword": "敏感词0",
        "speaker": 0
      },
      {
        "conversation_id": 1,
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 23445,
        "create_timestamp": 201434334,
        "keyword": "敏感词1",
        "speaker": 1
      },
      {
        "conversation_id": "343t56sdfgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 12,
        "create_timestamp": 2012322434334,
        "keyword": "敏感词2",
        "speaker": 0
      },
      {
        "conversation_id": "sd343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 78,
        "create_timestamp": 201434334,
        "keyword": "敏感词3",
        "speaker": 1
      },
      {
        "conversation_id": "343sdft56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 442,
        "create_timestamp": 201434444334,
        "keyword": "敏感词4",
        "speaker": 0
      },
      {
        "conversation_id": "3435343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 2554,
        "create_timestamp": 1120221434334,
        "keyword": "敏感词5",
        "speaker": 1
      },
      {
        "conversation_id": "545343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 6566,
        "create_timestamp": 2014312124334,
        "keyword": "敏感词6",
        "speaker": 0
      },
      {
        "conversation_id": "34563t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 2,
        "create_timestamp": 20222221434334,
        "keyword": "敏感词7",
        "speaker": 1
      },
      {
        "conversation_id": "455634356t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 2,
        "create_timestamp": 20788881434334,
        "keyword": "敏感词8",
        "speaker": 0
      },
      {
        "conversation_id": "898343t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 299999,
        "create_timestamp": 202221434334,
        "keyword": "敏感词9",
        "speaker": 1
      },
      {
        "conversation_id": "398943t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 243,
        "create_timestamp": 20232321434334,
        "keyword": "敏感词10",
        "speaker": 0
      },
      {
        "conversation_id": "34944563t56fgf",
        "called_no": "18802419208",
        "user_name": "客户",
        "duration_ms": 2232,
        "create_timestamp": 2014454534334,
        "keyword": "敏感词11",
        "speaker": 1
      }
    ]
  },
  "GET:/sales_ai_coach/v20180814/api/keyword_list": [
    {
      "word": "敏感词01",
      "id": 123
    },
    {
      "word": "敏感词02",
      "id": 456
    },
    {
      "word": "敏感词03",
      "id": 789
    },
  ],
  "GET:/sales_ai_coach/v20181016/api/overview/work": {
    counts: [30, 45, 23, 45, 80, 36, 50],
    avgs: [3043, 584, 585, 3724, 494, 323, 445]
  },
  "GET:/sales_ai_coach/v20181016/api/overview/outline": {
    count: 888,
    duration: 1323791
  },
  "GET:/sales_ai_coach/v20181016/api/overview/stage_knowledge": {
    stages: [
      {
        name: "开场白",
        count: 35
      },
      {
        name: "需求分析",
        count: 80
      },
      {
        name: "公司介绍",
        count: 60
      }
    ],
    knowledges: [
      {
        name: "开场白",
        count: 35
      },
      {
        name: "需求分析",
        count: 80
      },
      {
        name: "公司介绍",
        count: 60
      },
      {
        name: "开场白",
        count: 35
      },
      {
        name: "需求分析",
        count: 80
      },
      {
        name: "公司介绍",
        count: 60
      },
      {
        name: "开场白",
        count: 35
      },
      {
        name: "需求分析",
        count: 80
      },
      {
        name: "公司介绍",
        count: 60
      },
      {
        name: "公司介绍",
        count: 60
      }
    ]
  },
  "GET:/sales_ai_coach/v20181016/api/overview/key_word": [
    {
      name: "开场白",
      count: 35
    },
    {
      name: "需求分析",
      count: 80
    },
    {
      name: "公司介绍",
      count: 60
    },
    {
      name: "开场白",
      count: 35
    },
    {
      name: "需求分析",
      count: 80
    },
    {
      name: "公司介绍公司介绍",
      count: 60
    }
  ],
  "GET:/sales_ai_coach/v20181016/api/overview/rate": [30, 45, 23, 45, 80, 36, 50],
  "GET:/sales_ai_coach/v20181016/api/overview/knowledge": [],
  "GET:/sales_ai_coach/renbao/api/conversation_config": {
    "stages": [
      {
        "id": 0,
        "name": "开场白",
        "comment": "一段开场白",
        "order": 0,
        "ideas": [
          {
            "id": 0,
            "name": "开场白1",
            "comment": "一段开场白11",
            "order": 0
          },
          {
            "id": 1,
            "name": "开场白2",
            "comment": "一段开场白22",
            "order": 2
          },
          {
            "id": 2,
            "name": "开场白3",
            "comment": "一段开场白33",
            "order": 4
          }
        ]
      },
      {
        "id": 11,
        "name": "结束语",
        "comment": "一段结束语",
        "order": 0,
        "ideas": [
          {
            "id": 01,
            "name": "结束语1",
            "comment": "一段结束语11",
            "order": 0
          },
          {
            "id": 11,
            "name": "结束语2",
            "comment": "一段结束语22",
            "order": 2
          },
          {
            "id": 21,
            "name": "结束语3",
            "comment": "一段结束语33",
            "order": 4
          }
        ]
      }
    ],
    "knowledges": [
      {
        "title": "客户抱怨价格太贵",
        "content": "客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵"
      },
      {
        "title": "1客户抱怨价格太贵",
        "content": "1客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵"
      },
      {
        "title": "2客户抱怨价格太贵",
        "content": "2客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵"
      }
    ],
    "user_id": "user_id",
    "annotation_config": {
      "user_profile": {
        "in_use": true,
        "all_items": [ "name", "phone_number", "business_type" ],
        "in_use_items": [ "name", "business_type" ]
      }
    }
  },
  "GET:/sales_ai_coach/renbao/api/search/knowledge": [
    {
      "title": "search客户抱怨价格太贵",
      "content": "客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵"
    },
    {
      "title": "1search客户抱怨价格太贵",
      "content": "1客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵"
    },
    {
      "title": "2search客户抱怨价格太贵",
      "content": "2客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵客户抱怨价格太贵"
    }
  ],
  "POST:/sales_ai_coach/renbao/api/user_profile/p1/change": (req, res)=>{
    res.status(201).send('ok');
  },
  "POST:/sales_ai_coach/v20181016/api/user_profile/p2/change": (req, res)=>{
    res.status(201).send('ok');
  },
  "GET:/sales_ai_coach/v20181030/api/overview/dashboard": {
    "today_conversation": 210,
    "yesterday_conversation": 210,
    "today_keyword": 79,
    "yesterday_keyword": 80,
    "current_month_keyword": 1000,
    "last_month_keyword": 50
  },
  "GET:/sales_ai_coach/v20181030/api/today_keyword_list": [
    {
      "create_timestamp": 45343,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词1",
      "sentence_id": 0
    },
    {
      "create_timestamp": 343,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词2",
      "sentence_id": 1
    },
    {
      "create_timestamp": 4524,
      "conversation_id": 0,
      "speaker": 1,
      "key_word": "敏感词3",
      "sentence_id": 2
    },
    {
      "create_timestamp": 45,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词4",
      "sentence_id": 3
    },
    {
      "create_timestamp": 123,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词5",
      "sentence_id": 4
    },
    {
      "create_timestamp": 4245,
      "conversation_id": 0,
      "speaker": 1,
      "key_word": "敏感词6",
      "sentence_id": 5
    },
    {
      "create_timestamp": 542,
      "conversation_id": 0,
      "speaker": 1,
      "key_word": "敏感词7",
      "sentence_id": 6
    },
    {
      "create_timestamp": 943,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词8",
      "sentence_id": 7
    },
    {
      "create_timestamp": 4528,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词9",
      "sentence_id": 8
    },
    {
      "create_timestamp": 4543,
      "conversation_id": 0,
      "speaker": 1,
      "key_word": "敏感词10",
      "sentence_id": 9
    },
    {
      "create_timestamp": 9934,
      "conversation_id": 0,
      "speaker": 0,
      "key_word": "敏感词11",
      "sentence_id": 10
    },
    {
      "create_timestamp": 4523,
      "conversation_id": 0,
      "speaker": 1,
      "key_word": "敏感词12",
      "sentence_id": 11
    }
  ],
  "GET:/sales_ai_coach/v20181030/api/overview/today_keyword": [
    {
      "name": "敏感词1",
      "count": 20
    },
    {
      "name": "敏感词2",
      "count": 80
    },
    {
      "name": "敏感词3",
      "count": 50
    },
    {
      "name": "敏感词4",
      "count": 35
    },
    {
      "name": "敏感词5",
      "count": 38
    },
    {
      "name": "敏感词6",
      "count": 60
    },
    {
      "name": "敏感词7",
      "count": 50
    },
    {
      "name": "敏感词8",
      "count": 39
    }
  ],
  "POST:/sales_ai_coach/v20181113/api/annotation/get": (req, res)=>{
    res.status(201).send(
      {
        "user_profile": {
          "in_use": true,
          "all_items": [ "name", "phone_number", "business_type" ],
          "in_use_items": [ "name", "business_type" ]
        },
        "sales_speed": {
          "in_use": true,
          "range": [ 50, 80 ]
        },
        "sales_talk_proportion": {
          "in_use": false,
          "range": [ 30, 60 ]
        }
      }
    );
  },
  "POST:/sales_ai_coach/v20181113/api/annotation/change": (req, res)=>{
    res.status(201).send("OK");
  }
}
