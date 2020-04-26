package ru.rogi.socialnet.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.rogi.socialnet.domain.Message;

public interface MessageRepo extends JpaRepository<Message, Long> {
}
