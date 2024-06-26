package com.Petching.petching.response;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;
@Getter
public class MultiResponse<T> {
    private List<T> data;
    private PageInfo pageInfo;

    public MultiResponse(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }

    public MultiResponse(List<T> data, PageInfo pageInfo) {
        this.data = data;
        this.pageInfo = pageInfo;
    }
}