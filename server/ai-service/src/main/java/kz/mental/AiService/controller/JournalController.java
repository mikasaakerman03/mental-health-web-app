//package kz.mental.AiService.controller;
//
//import kz.mental.AiService.dto.*;
//import kz.mental.AiService.service.JournalService;
//import org.springframework.http.*;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//
//import jakarta.validation.Valid;
//
//@RestController
//@RequestMapping("/api/v1/journal")
//@Validated
//public class JournalController {
//
//    private final JournalService service;
//
//    public JournalController(JournalService service) {
//        this.service = service;
//    }
//
//    @PostMapping("/create-record")
//    public ResponseEntity<JournalRecordResponse> createRecord(
//            @Valid @RequestBody JournalRecordRequest request
//    ) {
//        JournalRecordResponse resp = service.createRecord(request);
//        return ResponseEntity
//                .status(HttpStatus.CREATED)
//                .body(resp);
//    }
//}
