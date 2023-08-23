package com.Petching.petching.temp.chat.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class ChatDto {
    @Getter
    public static class Post {
        @NotNull
        private long memberId; // 채팅을 받는 사람
    }
    @Getter
    @Builder
    public static class RoomResponse {
        private long roomId;
        private MemberDto.ResponseOnlyMemberName sender;
        private MemberDto.ResponseOnlyMemberName receiver;
    }
    @Getter
    @Builder
    public static class MessageResponse { // 채팅방 속 하나의 메세지
        private long messageId;
        private MemberDto.ResponseOnlyMemberName sender;
        private String content;
        private LocalDateTime sendTime;
    }
}