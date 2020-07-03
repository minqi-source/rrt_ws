// Auto-generated. Do not edit!

// (in-package lqrrt_ros.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class MoveGoal {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.move_type = null;
      this.goal = null;
      this.focus = null;
      this.initial_plan_time = null;
      this.blind = null;
      this.speed_factor = null;
    }
    else {
      if (initObj.hasOwnProperty('move_type')) {
        this.move_type = initObj.move_type
      }
      else {
        this.move_type = '';
      }
      if (initObj.hasOwnProperty('goal')) {
        this.goal = initObj.goal
      }
      else {
        this.goal = new geometry_msgs.msg.Pose();
      }
      if (initObj.hasOwnProperty('focus')) {
        this.focus = initObj.focus
      }
      else {
        this.focus = new geometry_msgs.msg.Point();
      }
      if (initObj.hasOwnProperty('initial_plan_time')) {
        this.initial_plan_time = initObj.initial_plan_time
      }
      else {
        this.initial_plan_time = 0.0;
      }
      if (initObj.hasOwnProperty('blind')) {
        this.blind = initObj.blind
      }
      else {
        this.blind = false;
      }
      if (initObj.hasOwnProperty('speed_factor')) {
        this.speed_factor = initObj.speed_factor
      }
      else {
        this.speed_factor = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MoveGoal
    // Serialize message field [move_type]
    bufferOffset = _serializer.string(obj.move_type, buffer, bufferOffset);
    // Serialize message field [goal]
    bufferOffset = geometry_msgs.msg.Pose.serialize(obj.goal, buffer, bufferOffset);
    // Serialize message field [focus]
    bufferOffset = geometry_msgs.msg.Point.serialize(obj.focus, buffer, bufferOffset);
    // Serialize message field [initial_plan_time]
    bufferOffset = _serializer.float64(obj.initial_plan_time, buffer, bufferOffset);
    // Serialize message field [blind]
    bufferOffset = _serializer.bool(obj.blind, buffer, bufferOffset);
    // Serialize message field [speed_factor]
    bufferOffset = _arraySerializer.float64(obj.speed_factor, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MoveGoal
    let len;
    let data = new MoveGoal(null);
    // Deserialize message field [move_type]
    data.move_type = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [goal]
    data.goal = geometry_msgs.msg.Pose.deserialize(buffer, bufferOffset);
    // Deserialize message field [focus]
    data.focus = geometry_msgs.msg.Point.deserialize(buffer, bufferOffset);
    // Deserialize message field [initial_plan_time]
    data.initial_plan_time = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [blind]
    data.blind = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [speed_factor]
    data.speed_factor = _arrayDeserializer.float64(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.move_type.length;
    length += 8 * object.speed_factor.length;
    return length + 97;
  }

  static datatype() {
    // Returns string type for a message object
    return 'lqrrt_ros/MoveGoal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '28ef4b28cd3586cf6002e8b5bf1dc40f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Goal
    
    string move_type  # 'hold', 'drive', 'drive!', 'skid', 'spiral', 'bypass'
    geometry_msgs/Pose goal
    geometry_msgs/Point focus
    float64 initial_plan_time
    bool blind
    float64[] speed_factor
    
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MoveGoal(null);
    if (msg.move_type !== undefined) {
      resolved.move_type = msg.move_type;
    }
    else {
      resolved.move_type = ''
    }

    if (msg.goal !== undefined) {
      resolved.goal = geometry_msgs.msg.Pose.Resolve(msg.goal)
    }
    else {
      resolved.goal = new geometry_msgs.msg.Pose()
    }

    if (msg.focus !== undefined) {
      resolved.focus = geometry_msgs.msg.Point.Resolve(msg.focus)
    }
    else {
      resolved.focus = new geometry_msgs.msg.Point()
    }

    if (msg.initial_plan_time !== undefined) {
      resolved.initial_plan_time = msg.initial_plan_time;
    }
    else {
      resolved.initial_plan_time = 0.0
    }

    if (msg.blind !== undefined) {
      resolved.blind = msg.blind;
    }
    else {
      resolved.blind = false
    }

    if (msg.speed_factor !== undefined) {
      resolved.speed_factor = msg.speed_factor;
    }
    else {
      resolved.speed_factor = []
    }

    return resolved;
    }
};

module.exports = MoveGoal;