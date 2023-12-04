package Mzos_P.SpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Mzos_P.SpringBoot.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
