from flask import (
    session,
    redirect,
    url_for,
    render_template,
    request,
    jsonify,
)

from . import main

# 默认的话题列表数据
topics = [
    {'id': 1, 'title': '编程'},
    {'id': 2, 'title': '篮球'},
    {'id': 3, 'title': '生活'},
]


# 默认的话题列表数据
topics = [
    {'id': 1, 'title': '编程'},
    {'id': 2, 'title': '篮球'},
    {'id': 3, 'title': '生活'},
]

# 获取所有话题列表
@main.route('/topics', methods=['GET'])
def get_topics():
    return jsonify(topics)

# 获取特定话题
@main.route('/topics/<int:topic_id>', methods=['GET'])
def get_topic(topic_id):
    topic = next((topic for topic in topics if topic['id'] == topic_id), None)
    if topic:
        return jsonify(topic)
    else:
        return jsonify({'error': 'Topic not found.'})

# 添加新话题
@main.route('/add_topic', methods=['POST'])
def add_topic():
    data = request.get_json()
    if 'title' in data:
        new_topic = {
            'id': len(topics) + 1,
            'title': data['title']
        }
        topics.append(new_topic)
        return jsonify({'msg': 'Topic added successfully!', 'topic': new_topic}), 200
    else:
        return jsonify({'error': 'Title is required.'}), 400
 
