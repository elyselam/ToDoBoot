package com.postgres.Boot.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "ToDos")
public class ToDo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long toDoID;

    @NotBlank
    @Size(min = 3, max = 100)
    private String title;

    @Column(columnDefinition = "text")
    private String description;

	public Long getToDoID() {
		return toDoID;
	}

	public void setToDoID(Long toDoID) {
		this.toDoID = toDoID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
