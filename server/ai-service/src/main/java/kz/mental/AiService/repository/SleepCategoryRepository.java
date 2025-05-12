package kz.mental.AiService.repository;

import kz.mental.AiService.entity.SleepCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SleepCategoryRepository extends JpaRepository<SleepCategory, Integer> {
    Optional<SleepCategory> findByCode(String code);
}
