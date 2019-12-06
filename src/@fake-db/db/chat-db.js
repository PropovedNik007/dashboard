import mock from './../mock';
import {FuseUtils} from '@fuse';
import _ from '@lodash';

function getChatFromDirectual() {
    fetch("https://directual.com/good/api/v5/data/chat/chat?appID=28062ec0-a070-42d5-9b4b-a92d093af3af&sessionID=948b4f49-c795-436f-ab22-15b30bccf38d")
        .then(response => response.json())
        .then(jsonResponse => {
            const a = jsonResponse.payload.map((item) => {
                return {
                    id: item.id,
                    dialog: [
                        {
                            who: item.who,
                            message: item.message,
                            time: item.time
                        },
                    ]
                };
            });
            return a;
        })
}

function getChatlistFromDirectual() {
    fetch('https://directual.com/good/api/v5/data/chatlist/chatlist?appID=28062ec0-a070-42d5-9b4b-a92d093af3af&sessionID=30cbebc2-8410-45ed-aedc-3cba8911252e')
        .then(response => response.json())
        .then(jsonResponse => {
            const a = jsonResponse.payload.map((item) => {
                return {
                    chatId: item.id,
                    contactId: item.contactId,
                    lastMessageTime: item.lastMessageTime
                };
            });
            return a;
        })
}

const chatDb = {
    contacts: [
        {
            'id': '5725a680b3249760ea21de52',
            'name': 'Alice Freeman',
            'avatar': 'assets/images/avatars/alice.jpg',
            'status': 'online',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            'unread': '2'
        },
        {
            'id': '5725a680606588342058356d',
            'name': 'Arnold',
            'avatar': 'assets/images/avatars/Arnold.jpg',
            'status': 'do-not-disturb',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            'unread': '3'
        },
        {
            'id': '5725a68009e20d0a9e9acf2a',
            'name': 'Barrera',
            'avatar': 'assets/images/avatars/Barrera.jpg',
            'status': 'do-not-disturb',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            'unread': '1'
        },
        {
            'id': '5725a6809fdd915739187ed5',
            'name': 'Blair',
            'avatar': 'assets/images/avatars/Blair.jpg',
            'status': 'offline',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a68007920cf75051da64',
            'name': 'Boyle',
            'avatar': 'assets/images/avatars/Boyle.jpg',
            'status': 'offline',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a68031fdbb1db2c1af47',
            'name': 'Christy',
            'avatar': 'assets/images/avatars/Christy.jpg',
            'status': 'offline',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680bc670af746c435e2',
            'name': 'Copeland',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'status': 'online',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680e7eb988a58ddf303',
            'name': 'Estes',
            'avatar': 'assets/images/avatars/Estes.jpg',
            'status': 'away',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680dcb077889f758961',
            'name': 'Harper',
            'avatar': 'assets/images/avatars/Harper.jpg',
            'status': 'offline',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a6806acf030f9341e925',
            'name': 'Helen',
            'avatar': 'assets/images/avatars/Helen.jpg',
            'status': 'away',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680ae1ae9a3c960d487',
            'name': 'Henderson',
            'avatar': 'assets/images/avatars/Henderson.jpg',
            'status': 'offline',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680b8d240c011dd224b',
            'name': 'Josefina',
            'avatar': 'assets/images/avatars/Josefina.jpg',
            'status': 'online',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a68034cb3968e1f79eac',
            'name': 'Katina',
            'avatar': 'assets/images/avatars/Katina.jpg',
            'status': 'away',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a6801146cce777df2a08',
            'name': 'Lily',
            'avatar': 'assets/images/avatars/Lily.jpg',
            'status': 'do-not-disturb',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a6808a178bfd034d6ecf',
            'name': 'Mai',
            'avatar': 'assets/images/avatars/Mai.jpg',
            'status': 'away',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680653c265f5c79b5a9',
            'name': 'Nancy',
            'avatar': 'assets/images/avatars/Nancy.jpg',
            'status': 'do-not-disturb',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680bbcec3cc32a8488a',
            'name': 'Nora',
            'avatar': 'assets/images/avatars/Nora.jpg',
            'status': 'do-not-disturb',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a6803d87f1b77e17b62b',
            'name': 'Odessa',
            'avatar': 'assets/images/avatars/Odessa.jpg',
            'status': 'away',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680e87cb319bd9bd673',
            'name': 'Reyna',
            'avatar': 'assets/images/avatars/Reyna.jpg',
            'status': 'offline',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a6802d10e277a0f35775',
            'name': 'Shauna',
            'avatar': 'assets/images/avatars/Shauna.jpg',
            'status': 'online',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680aef1e5cf26dd3d1f',
            'name': 'Shepard',
            'avatar': 'assets/images/avatars/Shepard.jpg',
            'status': 'online',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a680cd7efa56a45aea5d',
            'name': 'Tillman',
            'avatar': 'assets/images/avatars/Tillman.jpg',
            'status': 'do-not-disturb',
            'mood': ''
        },
        {
            'id': '5725a680fb65c91a82cb35e2',
            'name': 'Trevino',
            'avatar': 'assets/images/avatars/Trevino.jpg',
            'status': 'away',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a68018c663044be49cbf',
            'name': 'Tyson',
            'avatar': 'assets/images/avatars/Tyson.jpg',
            'status': 'do-not-disturb',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id': '5725a6809413bf8a0a5272b1',
            'name': 'Velazquez',
            'avatar': 'assets/images/avatars/Velazquez.jpg',
            'status': 'online',
            'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        }
    ],

    chats:
        [
            {
                'id'    : '1725a680b3249760ea21de52',
                'dialog': [
                    {
                        'who'    : '5725a680b3249760ea21de52',
                        'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                        'time'   : '2017-03-22T08:54:28.299Z'
                    },]
            },
        //getChatFromDirectual(),
            ],

    user: [
        {
            'id': '5725a6802d10e277a0f35724',
            'name': 'John Doe',
            'avatar': 'assets/images/avatars/profile.jpg',
            'status': 'online',
            'mood': 'it\'s a status....not your diary...',
            chatList:
                [
                    {
                        'chatId'         : '1725a680b3249760ea21de52',
                        'contactId'      : '5725a680b3249760ea21de52',
                        'lastMessageTime': '2017-06-12T02:10:18.931Z'
                    },

                //getChatlistFromDirectual(),


                fetch('https://directual.com/good/api/v5/data/chatlist/chatlist?appID=28062ec0-a070-42d5-9b4b-a92d093af3af&sessionID=30cbebc2-8410-45ed-aedc-3cba8911252e', {
                    headers: {"Content-Type": "application/json"},
                    method: 'GET',
                    })
                    .then(response => response.json())
                    .then(jsonResponse => {
                            const a = jsonResponse.payload.map((item) => {
                                return {
                                    chatId: item.id,
                                    contactId: item.contactId,
                                    lastMessageTime: item.lastMessageTime
                                };
                            });
                            return a;
                            })
                ]


            // {
            //     'chatId': '3725a6809413bf8a0a5272b4',
            //     'contactId': '5725a68009e20d0a9e9acf2a',
            //     'lastMessageTime': '2017-03-18T12:30:18.931Z'
            // }

        }
    ]
};

console.log(chatDb.user);

mock.onGet('/api/chat/contacts').reply((config) => {
    return [200, chatDb.contacts];
});

mock.onGet('/api/chat/get-chat').reply((request) => {
    const {contactId, userId} = request.params;
    let response;
    const user = chatDb.user.find(_user => _user.id === userId);

    const chat = user.chatList.find((_chat) => _chat.contactId === contactId);
    const chatId = chat ? chat.chatId : createNewChat(contactId, userId);
    response = chatDb.chats.find((_chat) => _chat.id === chatId);
    return [
        200, {
            chat: response,
            userChatData: user.chatList.find((_chat) => _chat.contactId === contactId)
        }
    ];
});

mock.onGet('/api/chat/user').reply((config) => {
    return [200, chatDb.user[0]];
});

mock.onPost('/api/chat/user/data').reply((request) => {
    const data = JSON.parse(request.data);
    chatDb.user[0] = _.merge({}, chatDb.user[0], data);
    return [200, chatDb.user[0]];
});

function createNewChat(contactId, userId) {
    const user = chatDb.user.find(_user => _user.id === userId);
    let chatId = FuseUtils.generateGUID();
    user.chatList = [
        {
            'chatId': chatId,
            'contactId': contactId,
            'lastMessageTime': ''
        },
        ...chatDb.user[0].chatList
    ];
    chatDb.chats = [
        ...chatDb.chats,
        {
            'id': chatId,
            'dialog': []
        }
    ];
    return chatId;
}

mock.onPost('/api/chat/send-message').reply((request) => {
    const data = JSON.parse(request.data);
    const {chatId, message, contactId} = data;
    let chat = chatDb.chats.find(_chat => _chat.id === chatId);
    chat.dialog = [
        ...chat.dialog,
        message
    ];
    chatDb.user[0].chatList.find(_contact => _contact.id === contactId).lastMessageTime = message.time;
    return [
        200, {
            message,
            userChatData: chatDb.user[0].chatList.find(_contact => _contact.id === contactId)
        }
    ];
});



