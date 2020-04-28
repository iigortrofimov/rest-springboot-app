package ru.rogi.socialnet.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.rogi.socialnet.domain.User;

public interface UserDetailsRepo extends JpaRepository<User, String> {
}
