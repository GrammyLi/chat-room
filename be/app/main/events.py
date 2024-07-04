from flask import (
    session,
    redirect,
    url_for,
    render_template,
    request,
    jsonify,
)

from flask_socketio import (
    emit,
    join_room,
    leave_room,
)

from .. import socketio


@socketio.on('joined', namespace='/chat')
def joined(message):
    """
    当客户端进入房间时发送。
    状态消息将广播给房间内的所有人。
    """
    room = message['msg']
    join_room(room)
    session['room'] = room
    emit('status', {'msg': message.get('name') +
         '进入了房间。'}, room=room)


@socketio.on('text', namespace='/chat')
def text(message):
    """
    当用户输入新消息时，由客户端发送。
    消息将发送给房间内的所有人。
    """
    room = message.get('room')
    emit('message', {'msg': message.get('name') +
         ':' + message['msg']}, room=room)


@socketio.on('left', namespace='/chat')
def left(message):
    """
    当客户端离开房间时发送。
    状态消息将广播给房间内的所有人。
    """
    room = session.get('room')
    session.pop('room')
    leave_room(room)
    emit('status', {'msg': message.get('name') +
         '离开了房间。'}, room=room)

 


