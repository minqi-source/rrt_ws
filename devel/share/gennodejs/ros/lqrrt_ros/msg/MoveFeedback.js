// Auto-generated. Do not edit!

// (in-package lqrrt_ros.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class MoveFeedback {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.behavior = null;
      this.tree_size = null;
      this.tracking = null;
      this.distance = null;
      this.time_till_next_branch = null;
    }
    else {
      if (initObj.hasOwnProperty('behavior')) {
        this.behavior = initObj.behavior
      }
      else {
        this.behavior = '';
      }
      if (initObj.hasOwnProperty('tree_size')) {
        this.tree_size = initObj.tree_size
      }
      else {
        this.tree_size = 0;
      }
      if (initObj.hasOwnProperty('tracking')) {
        this.tracking = initObj.tracking
      }
      else {
        this.tracking = false;
      }
      if (initObj.hasOwnProperty('distance')) {
        this.distance = initObj.distance
      }
      else {
        this.distance = [];
      }
      if (initObj.hasOwnProperty('time_till_next_branch')) {
        this.time_till_next_branch = initObj.time_till_next_branch
      }
      else {
        this.time_till_next_branch = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MoveFeedback
    // Serialize message field [behavior]
    bufferOffset = _serializer.string(obj.behavior, buffer, bufferOffset);
    // Serialize message field [tree_size]
    bufferOffset = _serializer.int64(obj.tree_size, buffer, bufferOffset);
    // Serialize message field [tracking]
    bufferOffset = _serializer.bool(obj.tracking, buffer, bufferOffset);
    // Serialize message field [distance]
    bufferOffset = _arraySerializer.float64(obj.distance, buffer, bufferOffset, null);
    // Serialize message field [time_till_next_branch]
    bufferOffset = _serializer.float64(obj.time_till_next_branch, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MoveFeedback
    let len;
    let data = new MoveFeedback(null);
    // Deserialize message field [behavior]
    data.behavior = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [tree_size]
    data.tree_size = _deserializer.int64(buffer, bufferOffset);
    // Deserialize message field [tracking]
    data.tracking = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [distance]
    data.distance = _arrayDeserializer.float64(buffer, bufferOffset, null)
    // Deserialize message field [time_till_next_branch]
    data.time_till_next_branch = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.behavior.length;
    length += 8 * object.distance.length;
    return length + 25;
  }

  static datatype() {
    // Returns string type for a message object
    return 'lqrrt_ros/MoveFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9406c8b108b277e4eb75c321d48ddcc4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Feedback
    
    string behavior
    int64 tree_size
    bool tracking
    float64[] distance
    float64 time_till_next_branch
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MoveFeedback(null);
    if (msg.behavior !== undefined) {
      resolved.behavior = msg.behavior;
    }
    else {
      resolved.behavior = ''
    }

    if (msg.tree_size !== undefined) {
      resolved.tree_size = msg.tree_size;
    }
    else {
      resolved.tree_size = 0
    }

    if (msg.tracking !== undefined) {
      resolved.tracking = msg.tracking;
    }
    else {
      resolved.tracking = false
    }

    if (msg.distance !== undefined) {
      resolved.distance = msg.distance;
    }
    else {
      resolved.distance = []
    }

    if (msg.time_till_next_branch !== undefined) {
      resolved.time_till_next_branch = msg.time_till_next_branch;
    }
    else {
      resolved.time_till_next_branch = 0.0
    }

    return resolved;
    }
};

module.exports = MoveFeedback;
