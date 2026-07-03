import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Принимает заявку с формы сайта и отправляет уведомление в Telegram"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Укажите имя и контакт'})
        }

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    text = (
        f"🆕 Новая заявка с сайта omnybox\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Контакт: {contact}\n"
        f"💬 Задача: {message or '—'}"
    )

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()
    req = urllib.request.Request(url, data=data)
    urllib.request.urlopen(req, timeout=10)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
