//package com.Petching.petching.chat.entity;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//public class ChatMessage {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long messageId;
//
//    public enum MessageType {
//        ENTER, TALK
//    }
//    private MessageType type;
//    //채팅방 ID
//    private String roomId;
//    //보내는 사람
//    private String sender;
//    //내용
//    private String message;
//}