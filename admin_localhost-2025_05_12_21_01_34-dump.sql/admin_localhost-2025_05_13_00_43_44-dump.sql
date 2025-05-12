--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: admin; Type: DATABASE; Schema: -; Owner: admin
--

CREATE DATABASE admin WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE admin OWNER TO admin;

\connect admin

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: ourusers; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (1, 'ivan.ivanov42@example.com', '$2a$10$HyKVUZhNaBjYWiL6DFL/0u9iSqBiB4TtSFJMeCi3oW2p3bHyCq9.W', 'USER', 'Иван Иванов', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (2, 'aigerimok@example.com', '$2a$10$pD0PRdYewm8KzJlgYVAtnOYJfbily2P0q31d87sXcU8kUzhfIbJ3S', 'USER', 'Aigerim', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (4, 'ivan.ivanov422@example.com', '$2a$10$x6OCS5uu36Ysm.xoQIrOIu7f0v7KbwpE8DPjYEoeEqOVr5gMX2nBu', 'USER', 'Иван Иванов', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (5, 'ivan.ivanovf422@example.com', '$2a$10$mhOlTlUX0/fpdStdjBQEEuOItQL25eabA2KLAVXA8bOkXM.1JpNje', 'USER', 'Иван Иванов', '21984y1289489124612896424', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (6, 'ivan.ivanovdf422@example.com', '$2a$10$rnZ/9wb.X1J7/mIAF90Z3.kjpZtvzVe4Sc.rKd34s3DP.zrwhO7LW', 'USER', 'Иван Иванов', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (7, 'Nursadyk', '$2a$10$ikyHEAxqPG7jQjonIZKkN.a67GBX1htJdYwBOM2p/oi2uPtt53VM.', 'USER', 'Eldos', 'ksjfnkjnfkanefk', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (8, 'Nursad7yk', '$2a$10$fi5M.TLhtvw5ZKZzAM2JF.tK2wQB.kfMwnW8tour5HCvMDJitxySC', 'USER', 'Eldos', 'ksjfnkjnfkanefk', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (9, 'wpofwoefi', '$2a$10$JCGKbLCnJTGHHbN0ZnK7MeSUM1VrMAbftRYdYRxK9JpW34YtRGvtu', 'USER', 'woefpi', 'mock-device-token', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (11, 'dilnaz@email.com', '$2a$10$JsHL9AfddbBMTejNCnkop.2a4c8VV/hUY.IIJAYZAiW9sb6093XzK', 'USER', 'Дильназ', 'mock-device-token', NULL, 'г. Алматы', '1994-09-07', 'female', 162, 76);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (10, 'dana@email.com', '$2a$10$ugaJ/UG1lgsKNcEnwt0oHujGHGSmd0FfFto.QkC.dUQwoe3IvH04i', 'USER', 'Дильназ', 'deviceToken', NULL, 'г. Алматы', '2001-09-07', 'female', 162, 39);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (12, 'ooo@email.com', '$2a$10$I4055d9u2GsdqUDKmaM./OYxXgk72nQxMkUk9Z4digAbh3O9MBod6', 'USER', 'Айгерим Омирзак', 'mock-device-token', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (13, 'ooooo@email.com', '$2a$10$prv6TBEVmfxg9h7CzpLh.OjG57wTnToLxQGpx.Yip3XZOwATMUT1.', 'USER', 'Aigerim', 'mock-device-token', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.ourusers (id, email, password, role, name, device_token, expo_token, address, birth_date, gender, height, weight) VALUES (14, 'meruert@email.com', '$2a$10$cAys8zgoGjogOHtReFTwBOCjpKYn1NnSVrDEuLK/C.dM8Qr4wal/e', 'USER', 'Meruert', 'mock-device-token', NULL, NULL, NULL, NULL, NULL, NULL);


--
-- Data for Name: journal_records; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('2f2f2ae2-e2c5-407c-b196-93bcd5db2f54', 0, '2025-05-01 15:46:25.037759+00', 2, 'Сегодня я чувствую...', 3, 'Работа', 'Мой дневник', NULL);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('f9ff6f5c-f7d6-498a-aaa2-d003aa2b3336', 0, '2025-05-01 16:00:12.340014+00', 2, 'Сегодня я чувствую...', 3, 'Работа', 'Мой дневник', NULL);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('26a52cb5-b7d5-47a2-ba0c-8d56e7b8245c', 0, '2025-05-01 16:04:33.884232+00', 2, 'Сегодня я чувствую...', 3, 'Работа', 'Мой дневник', NULL);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('d779be44-054e-4dbc-9dbc-1b56b7d5554f', 0, '2025-05-01 16:54:15.304406+00', 2, 'Сегодня я чувствую...', 3, 'Работа', 'Мой дневник', NULL);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('a34e22f6-0b44-453a-af24-efc7c6b4a47d', 0, '2025-05-01 17:00:09.507513+00', 2, 'Сегодня я чувствую...', 3, 'Работа', 'Мой дневник', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('1f1735f0-491e-4499-bbad-3a6454966924', 0, '2025-05-02 12:21:43.520842+00', 2, 'Сегодня я чувствую...', 3, 'Работа', 'Мой дневник', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('093969ee-f06a-4bfd-ade1-dcc505a009f8', 2, '2025-05-02 12:22:43.542431+00', 2, 'мне очень полохо ', 3, 'Работа', 'Мой дневник', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('49ae8b13-47fc-45a7-a88a-8e985fdb78b2', 2, '2025-05-02 13:04:26.791905+00', 2, 'Я упал с велосипеда', 3, 'Работа', 'Мой дневник', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('02d3bce3-7f18-4925-80d4-ad001d3542bd', 2, '2025-05-02 13:09:06.036631+00', 2, 'И ещё я поругалась с подругой', 3, 'Работа', 'Мой дневник', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('b4f41c54-2147-4761-9bfc-5695d22f00c0', 2, '2025-05-08 09:26:55.350292+00', 2, 'И ещё я переела', 3, 'Работа', 'Мой дневник', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('a3b8dff3-7122-4774-b36a-2ebf114e473d', 0, '2025-05-08 09:34:33.722344+00', 3, 'ывдлаодылвоа', 3, '', 'ывлоаыдова', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('430d67f3-3348-40fe-94d8-4d4dea000759', 1, '2025-05-08 15:29:30.071885+00', 5, 'Бүгін таңертең достарыммен саябақта серуендеп, балмұздақ жедім.', 1, '', 'Серуен', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('0f80b452-7636-4770-8284-a0ee15e9dc7a', 1, '2025-05-08 15:29:54.083391+00', 5, 'Мектептен кейін кітапханадан жаңа кітап таптым', 1, '', 'Үй тапсырмасы', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('fc6af914-e61b-452c-999e-351b39c34a9f', 1, '2025-05-08 15:30:16.823134+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('a0ac60e7-e417-4cd0-8d20-bf4c3d85eb37', 0, '2025-05-10 08:37:12.084887+00', 5, 'Фильм қарадым', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('187bd8a3-9a11-4084-8328-1d40fe0552c9', 1, '2025-05-10 08:41:30.394416+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('04341460-3a00-4410-b521-97d807167cf8', 1, '2025-05-10 10:12:07.2759+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('7439e8de-6362-4ec0-ab6e-15796b5df45e', 2, '2025-05-10 11:00:18.260654+00', 5, 'Бугин жай жаттым не истеримди билмей', 2, '', 'Жаксы кун', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('95e09151-2b35-4789-9368-edf3d3e11f10', 1, '2025-05-10 11:10:37.059788+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('efce1146-2578-40af-aa7b-b7b265ff54b1', 1, '2025-05-10 11:13:07.744799+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('fb2204b4-373c-4aeb-9fd2-177005461e0b', 1, '2025-05-10 11:14:54.890971+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('f9c55a49-a99c-4f6d-a484-35ea6bc64fb4', 1, '2025-05-10 11:18:45.808362+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('83ba62e7-8821-4b8c-bcbf-6a2deec091b1', 1, '2025-05-10 11:19:28.816789+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('02d37264-dc23-4641-8075-dcd3e3f56086', 1, '2025-05-10 11:25:05.596819+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('d6cd271d-e26e-4a73-aacc-aa7a1b238523', 1, '2025-05-10 11:30:55.947582+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('1478dea3-1bfb-443f-98e1-0ee3b465691d', 1, '2025-05-10 11:35:34.691909+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('7d94baf9-ce93-41e2-aad9-b8c01c68750d', 1, '2025-05-10 11:38:36.95644+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('617eac4f-9815-48e2-abdc-8e49270a9cb3', 1, '2025-05-10 11:45:35.266166+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);
INSERT INTO public.journal_records (id, ai_category, created_at, emotion_id, entry, stress_level, stressor, title, user_id) VALUES ('9d64dcb6-9eb4-44da-a8a8-d2c07476588f', 1, '2025-05-10 11:46:20.275271+00', 5, 'Фильм қарап, пицца жеген жылы әрі көңілді кеш  болды ', 1, '', 'Отбасылық кеш', 11);


--
-- Data for Name: ai_suggestion; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: balance; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.balance (id, amount) VALUES (2, '200.00');
INSERT INTO public.balance (id, amount) VALUES (3, '300.00');
INSERT INTO public.balance (id, amount) VALUES (4, '0.00');
INSERT INTO public.balance (id, amount) VALUES (5, '0.00');
INSERT INTO public.balance (id, amount) VALUES (6, '0.00');
INSERT INTO public.balance (id, amount) VALUES (7, '0.00');
INSERT INTO public.balance (id, amount) VALUES (8, '0.00');
INSERT INTO public.balance (id, amount) VALUES (9, '0.00');
INSERT INTO public.balance (id, amount) VALUES (10, '0.00');
INSERT INTO public.balance (id, amount) VALUES (11, '0.00');
INSERT INTO public.balance (id, amount) VALUES (12, '0.00');
INSERT INTO public.balance (id, amount) VALUES (13, '0.00');
INSERT INTO public.balance (id, amount) VALUES (1, '500.0');


--
-- Data for Name: chatbot_categories; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.chatbot_categories (id, category_count, title_kk, title_ru) VALUES (1, 12, 'Ағымдағы', 'Текущие');
INSERT INTO public.chatbot_categories (id, category_count, title_kk, title_ru) VALUES (2, 25, 'Бетбелгілер', 'Закладки');
INSERT INTO public.chatbot_categories (id, category_count, title_kk, title_ru) VALUES (3, 10, 'Таңдаулы', 'Избранное');
INSERT INTO public.chatbot_categories (id, category_count, title_kk, title_ru) VALUES (4, 1, 'Себет', 'Корзина');
INSERT INTO public.chatbot_categories (id, category_count, title_kk, title_ru) VALUES (5, 1, 'Тапсырылмаған', 'Не назначено');


--
-- Data for Name: chatbot_topics; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.chatbot_topics (id, title_kk, title_ru, category_id, owner_email) VALUES ('c2a5eb10-7d64-4b3f-923f-e650d94c22a0', 'Бақытты болу жолы', 'Как стать счастливым', 1, 'dilnaz@email.com');
INSERT INTO public.chatbot_topics (id, title_kk, title_ru, category_id, owner_email) VALUES ('b5f203dc-8a5d-4b14-bd72-c41b49a00352', 'Стресс', 'Стресс', 1, 'dilnaz@email.com');
INSERT INTO public.chatbot_topics (id, title_kk, title_ru, category_id, owner_email) VALUES ('d75b8d7c-e68d-42a1-bf4f-1ac434ba2053', 'Жеткіліксіздік сезімі', 'Недостаточность', 1, 'dilnaz@email.com');
INSERT INTO public.chatbot_topics (id, title_kk, title_ru, category_id, owner_email) VALUES ('a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 'Психикалық денсаулық', 'Психическое здоровье', 1, 'dilnaz@email.com');
INSERT INTO public.chatbot_topics (id, title_kk, title_ru, category_id, owner_email) VALUES ('b7131277-474f-42f4-8bba-3747613f67f6', 'dsavfdsafv', 'dsavfdsafv', 2, NULL);
INSERT INTO public.chatbot_topics (id, title_kk, title_ru, category_id, owner_email) VALUES ('5aa01134-1763-415a-87a7-a639e2f9de61', '1', '1', 1, 'meruert@email.com');


--
-- Data for Name: chat_history; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (11, 'Привет', '02801683-9df4-4164-8c4a-314cfef768ac', 'user', '2025-03-29 17:20:10.788052', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (12, 'Привет! Как я могу помочь тебе сегодня?', '4ce1b14e-7794-4ca9-b161-63ac60c3542a', 'assistant', '2025-03-29 17:20:13.942365', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (13, 'мне нужна психологическая помощь', '83551127-dd41-4c28-a0a9-2f109054383c', 'user', '2025-03-29 18:12:36.983333', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (14, 'Я здесь, чтобы помочь вам. Пожалуйста, расскажите, что именно вас беспокоит. Чем подробнее вы сможете описать свою ситуацию, тем лучше я смогу понять, что вы чувствуете и как вас поддержать.', '428fa3fd-bfaa-4198-8776-df6995f17fad', 'assistant', '2025-03-29 18:12:41.304049', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (15, 'я чувствую тревожность каждый раз когда нахожусь на людях', 'f2b28835-e231-4bb0-994f-bd6a9ef2c950', 'user', '2025-03-29 18:13:13.739279', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (16, 'Тревожность в социальных ситуациях — это довольно распространенная проблема, и многие люди испытывают подобные чувства. Это может быть связано с различными факторами, такими как страх оценки, переживания по поводу взаимодействия с другими или просто чувство неуверенности.

Вот несколько шагов, которые могут помочь справиться с тревожностью:

1. **Определите триггеры**. Обратите внимание на конкретные ситуации, которые вызывают у вас тревожность. Понимание, что именно вызывает ваши чувства, может помочь вам найти способы справиться с ними.

2. **Практикуйте дыхательные упражнения**. Глубокое дыхание может помочь успокоиться в моменты сильной тревожности. Попробуйте дышать медленно и глубоко, сосредотачиваясь на своем дыхании.

3. **Постепенное Exposure**. Постепенно увеличивайте время, проводимое в социальных ситуациях, начиная с менее напряженных. Это может помочь вам адаптироваться и научиться чувствовать себя более уверенно.

4. **Мысленный позитив**. Попробуйте заменить негативные мысли позитивными или нейтральными. Замените «Я сделаю что-то глупое» на «Я могу справиться с этой ситуацией».

5. **Обратитесь за поддержкой**. Общение с друзьями, родственниками или специалистом (например, психологом) может помочь вам разобраться в ваших чувствах и получить поддержку.

Если ваша тревожность серьезно влияет на вашу жизнь, возможно, стоит рассмотреть возможность обращения к специалисту для более глубокого анализа и помощи.', '7b2fa568-5028-41af-a4a1-55bdb1d6b2c5', 'assistant', '2025-03-29 18:13:20.574911', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (17, 'как быть позитивным', 'c610ab76-71bc-42d7-a72c-c5415eceeb56', 'user', '2025-03-29 18:20:36.050281', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (18, 'Быть позитивным — это навык, который можно развивать. Вот несколько советов, которые могут помочь:

1. **Практикуйте благодарность**. Каждый день находите время, чтобы записать три вещи, за которые вы благодарны. Это поможет вам сосредоточиться на положительных аспектах жизни.

2. **Окружите себя позитивными людьми**. Общение с людьми, которые заряжают энергией и поддерживают, может значительно улучшить ваше настроение.

3. **Заботьтесь о своем теле**. Регулярные физические нагрузки, здоровое питание и достаточный сон способствуют улучшению настроения и общего состояния.

4. **Измените негативные мысли**. Постарайтесь замечать негативные мысли и заменять их на более позитивные. Например, если вы думаете: «Я всегда ошибаюсь», замените это на «Я учусь на своих ошибках».

5. **Практикуйте медитацию и mindfulness**. Эти практики могут помочь вам оставаться в настоящем моменте и снизить уровень стресса.

6. **Устанавливайте цели**. Определите краткосрочные и долгосрочные цели, которые будут вдохновлять вас. Достижение целей может приносить радость и удовлетворение.

7. **Участвуйте в новых активностях**. Это может быть хобби, волонтерская работа или изучение чего-то нового. Новые впечатления могут поднимать настроение и давать позитивные эмоции.

8. **Смейтесь и находите радость в мелочах**. Смотрите комедии, читайте юмористические книги или просто общайтесь с людьми, которые вас развлекают.

Помните, что развитие позитивного мышления требует времени и практики. Будьте терпеливы к себе и постепенно внедряйте эти привычки в свою жизнь.', 'faf3ad22-72c2-4aa2-80f1-cd42d517a1cc', 'assistant', '2025-03-29 18:20:43.331891', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (19, 'у меня инсомния', 'e9f04403-36f3-43f0-95e6-624bea40ffcc', 'user', '2025-03-29 18:36:50.629205', 'c2a5eb10-7d64-4b3f-923f-e650d94c22a0', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (20, 'Инсомния — это достаточно распространённая проблема, и справиться с ней можно различными способами. Прежде всего, важно определить, что именно вызывает бессонницу: стресс, тревога, физические или психологические факторы.

Вот несколько рекомендаций, которые могут помочь:

1. **Создайте режим сна**: старайтесь ложиться и вставать в одно и то же время, даже в выходные. Это поможет регулировать ваш внутренний биологический часы.

2. **Создайте комфортную обстановку для сна**: убедитесь, что в вашей спальне темно, тихо и прохладно. Комфортный матрас и подушки также имеют большое значение.

3. **Ограничьте использование экранов перед сном**: синее свечение от экранов может мешать выработке мелатонина, гормона сна.

4. **Расслабляющие ритуалы**: практика медитации, дыхательные упражнения или чтение книги перед сном могут помочь расслабиться.

5. **Физическая активность**: регулярные физические упражнения способствуют улучшению качества сна. Однако старайтесь не заниматься спортом непосредственно перед сном.

6. **Ограничьте потребление кофеина и алкоголя**: эти вещества могут влиять на качество сна, поэтому старайтесь избегать их перед сном.

Если проблемы со сном продолжаются, и они серьёзно влияют на вашу жизнь, вам стоит обратиться к специалисту. Психолог может помочь выявить причины инсомнии и предложить стратегии для её преодоления.', 'af320f7e-545e-423d-86d9-8bd4bac8382b', 'assistant', '2025-03-29 18:36:57.892203', 'c2a5eb10-7d64-4b3f-923f-e650d94c22a0', 10);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (21, 'привет', 'fe8231b0-ab46-4db3-ac21-4d119df22ce4', 'user', '2025-03-29 21:51:55.71499', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (22, 'Привет! Как я могу помочь тебе сегодня?', '9a41c39f-2585-4b5a-9479-02f04c6d45e9', 'assistant', '2025-03-29 21:51:57.642971', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (23, 'тест на депрессию', '02c267bd-ada8-40c6-a25d-c2b4a87770c6', 'user', '2025-03-29 21:52:37.041158', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (24, 'Если вы подозреваете, что у вас могут быть симптомы депрессии, важно обратиться к специалисту, так как только квалифицированный психолог или психиатр может провести точную оценку и поставить диагноз. Тем не менее, я могу предложить вам несколько вопросов, на которые вы можете подумать, чтобы оценить свое состояние. Однако помните, что этот тест не является заменой профессиональной диагностики.

1. В течение последних двух недель:
   - Вы ощущали подавленное настроение большую часть дня?
   - У вас пропало удовольствие от занятий, которые раньше приносили радость?
   - Вы испытывали трудности со сном (бессонница или чрезмерная сонливость)?
   - У вас наблюдается изменение в аппетите (потеря или увеличение веса)?
   - Вы чувствовали усталость или недостаток энергии?
   - У вас возникали чувства безнадежности или бесполезности?
   - Вы испытывали трудности с концентрацией внимания?
   - У вас были мысли о самоповреждении или смерти?

Если вы ответили "да" на несколько из этих вопросов, это может быть признаком депрессивного состояния. Важно не игнорировать свои чувства и обратиться за помощью к специалисту. Если у вас возникли негативные мысли, ищите поддержки у близких или профессионалов.', 'df9b0515-b4cf-460c-8334-8fb6c6acdd0c', 'assistant', '2025-03-29 21:52:41.586801', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (25, 'казакша', '88307dc0-5a9a-48ff-bfe1-829b1d8f851b', 'user', '2025-03-29 21:53:23.166349', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (26, 'Сәлем! Сізге қалай көмектесе аламын?', 'e2d799f6-9d7e-4769-9a23-1206c267e93c', 'assistant', '2025-03-29 21:53:25.104505', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (27, 'депрессия тестын жаса', '4530575a-8746-4fc9-b801-38b4185b5faa', 'user', '2025-03-29 21:53:37.737634', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (28, 'Мен психологиялық тест немесе диагностика жүргізу қабілетіне ие емеспін, бірақ кейбір белгілер мен сұрақтарды ұсына аламын, олар сіздің көңіл-күйіңізді бағалауға көмектесуі мүмкін. Егер сізде депрессия белгілері болмаса, өзіңізді қолдау үшін профессионалдан көмек сұрау маңызды.

Мынадай сұрақтарға жауап беріп көріңіз:

1. Соңғы уақытта көңіл-күйіңіз қалай? Әдеттегідей қуанышты сезінбейсіз бе?
2. Жаңа істер жасауға қызығып отырсыз ба, әлде бұрынғы хоббиіңізге де қызықпайсыз ба?
3. Түнде қаншалықты жақсы ұйықтайсыз? Ұйқы мәселелері бар ма?
4. Күні бойы шаршаған сияқты сезінесіз бе?
5. Адамдармен қарым-қатынас жасағыңыз келе ме, әлде оны болдырмауға тырысасыз ба?
6. Тағамға деген қызығушылығыңыз өзгерді ме? Көп жейсіз бе, әлде апетитіңіз жоғалды ма?
7. Болашаққа қатысты көңіл-күйіңіз қалай? Пессимистік көзқарас белең алды ма?

Егер сіз көптеген сұрақтар бойынша «иә» деп жауап берсеңіз, бұл сіздің елеулі мәселелеріңіз болуы мүмкін. Психолог немесе психотерапевтпен сөйлесу ұсынылады. Олар сіздің жағдайыңызды тереңірек зерттеп, дұрыс қолдау көрсете алады.', '267767b4-83af-4e39-a494-37beff39d70f', 'assistant', '2025-03-29 21:53:44.2506', 'a1e9c3c4-5f2d-4c67-9a5e-0f47a9f1a001', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (41, 'Бакытты болудын 10 жолы', '48918700-50bd-46c9-8d2d-15832b18fd16', 'user', '2025-05-08 21:25:39.882888', 'c2a5eb10-7d64-4b3f-923f-e650d94c22a0', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (42, 'Бақытты болудың 10 жолы:

1. **Өзіңізді қабылдаңыз**: Өз күшті және әлсіз жақтарыңызбен келісіңіз. Өзін-өзі қабылдау бақыттың негізі.

2. **Позитивті ойлау**: Жақсы жақтарды көруге тырысыңыз және теріс ойларды болдырмауға зерттеңіз.

3. **Қарым-қатынастар**: Сүйгендеріңізбен жақсы қарым-қатынастар орнатыңыз. Достық пен махаббат өмірдің маңызды бөліктері.

4. **Мақсат қою**: Өмірде нақты мақсаттар қоя отырып, оларға жету жолында жұмыс жасаңыз. Бұл мотивация мен өзін-өзі дамытуға көмектеседі.

5. **Денсаулық**: Дұрыс тамақтану, тұрақты физикалық белсенділік және жеткілікті ұйқы – бақытты өмірдің маңызды аспектілері.

6. **Қиындықтарды жеңу**: Психологиялық кедергілермен жұмыс істеңіз. Стресс пен алаңдаушылықпен күресу үшін релаксация әдістерін қолданыңыз.

7. **Жаңа тәжірибе**: Жаңа нәрселерді үйреніп, жаңа тәжірибелерге ашық болыңыз. Бұл өмірдің қызықтылығын арттырады.

8. **Көмек көрсету**: Басқаларға көмектесіңіз. Игілгілік көрсету арқылы өзіңіз үшін де позитивті эмоциялар аласыз.

9. **Уақытты басқару**: Уақытты тиімді пайдаланып, Priority-лерді анықтаңыз. Маңызды нәрселерге назар аударыңыз.

10. **Ризашылық таныту**: Күннің жақсы сәттеріне алғыс айта отырып, өмірдің әр сәтінен ләззат алыңыз. Ризашылық бақыт сезімін арттырады.

Бұл жолдар сіздің бақытты өмір сүруге және ішкі тыныштықты сезінуге көмектеседі.', 'eff21d82-b710-48cc-a20e-83357f57b32e', 'assistant', '2025-05-08 21:25:49.097137', 'c2a5eb10-7d64-4b3f-923f-e650d94c22a0', 11);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (43, 'салем', '9675f219-a849-437b-8ecd-b0e1c785a3b0', 'user', '2025-05-13 00:49:06.350427', '5aa01134-1763-415a-87a7-a639e2f9de61', 14);
INSERT INTO public.chat_history (id, content, message_uuid, role, "timestamp", topic_id, user_id) VALUES (44, 'Салем! Как могу помочь вам сегодня?', '47d4d7be-c23d-4978-b5b5-d741962ab276', 'assistant', '2025-05-13 00:49:08.258177', '5aa01134-1763-415a-87a7-a639e2f9de61', 14);


--
-- Data for Name: daily_goals; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.daily_goals (id, date, goal_type, goal_value, user_id, done) VALUES (1, '2025-05-08', 'chatbot', 20, 11, false);
INSERT INTO public.daily_goals (id, date, goal_type, goal_value, user_id, done) VALUES (2, '2025-05-10', 'chatbot', 20, 11, false);
INSERT INTO public.daily_goals (id, date, goal_type, goal_value, user_id, done) VALUES (3, '2025-05-11', 'chatbot', 20, 11, false);
INSERT INTO public.daily_goals (id, date, goal_type, goal_value, user_id, done) VALUES (4, '2025-05-12', 'chatbot', 30, 11, true);
INSERT INTO public.daily_goals (id, date, goal_type, goal_value, user_id, done) VALUES (5, '2025-05-12', 'chatbot', 3, 14, false);
INSERT INTO public.daily_goals (id, date, goal_type, goal_value, user_id, done) VALUES (6, '2025-05-12', 'sleep', 5, 14, false);


--
-- Data for Name: firebase_user; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.firebase_user (userid, email, expo_token, name, balance, balance_id) VALUES (1, 'example@example.com', 'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]', 'John Doe', '1', NULL);
INSERT INTO public.firebase_user (userid, email, expo_token, name, balance, balance_id) VALUES (5, 'example@example.com', 'your_expo_token', 'John Doe', NULL, 1);
INSERT INTO public.firebase_user (userid, email, expo_token, name, balance, balance_id) VALUES (10, 'example@example.com', 'your_expo_token', 'John Doe', NULL, 2);
INSERT INTO public.firebase_user (userid, email, expo_token, name, balance, balance_id) VALUES (11, 'example@example.com', 'your_expo_token', 'John Doe', NULL, 3);
INSERT INTO public.firebase_user (userid, email, expo_token, name, balance, balance_id) VALUES (13, 'example@example.com', 'your_expo_token', 'John Doe', NULL, 4);


--
-- Data for Name: journal_summaries; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (1, '2025-05-02', 4, '2025-05-02 13:03:58.021719+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (4, '2025-05-09', 0, '2025-05-08 12:40:49.37145+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (5, '2025-05-06', 0, '2025-05-08 12:49:30.034865+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (6, '2025-05-07', 0, '2025-05-08 12:49:30.80718+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (7, '2025-05-04', 0, '2025-05-08 15:26:32.727286+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (8, '2025-05-05', 0, '2025-05-08 15:26:33.135101+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (3, '2025-05-08', 5, '2025-05-08 11:40:04.242241+00', 11, '', '');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (12, '2025-05-11', 0, '2025-05-11 10:20:16.901191+00', 11, 'На сегодня нет записей. Возможно, день прошел спокойно и без примечательных событий. Постарайтесь выделить время на рефлексию, чтобы понять свои чувства и мысли.', 'Бүгін жазбалар жоқ. Мүмкін, күн тыныш өтті және елеулі оқиғалар болмады. Өз сезімдеріңіз бен ойларыңызды түсіну үшін рефлексия жасауға уақыт табуға тырысыңыз.');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (13, '2025-05-12', 0, '2025-05-12 16:19:52.246765+00', 11, 'На сегодня нет записей.', 'Бүгінгі күні жазбалар жоқ.');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (9, '2025-05-10', 15, '2025-05-10 09:23:15.907944+00', 11, 'Сегодня был замечательный и приятный вечер, проведенный за просмотром фильма и поеданием пиццы. Это счастье и радость от простых удовольствий напоминает, как важно отдыхать и проводить время с удовольствием. Возможно, стоит чаще устраивать такие вечера для себя, чтобы поднять настроение и улучшить общее самочувствие.', 'Бүгін фильм көріп, пицца жеп, тамаша әрі көңілді кеш өткіздім. Осындай қарапайым ләззаттардың қуанышы мен бақытын сезіну, демалу мен қуанышты сәттерді өткізу қаншалықты маңызды екендігін еске салады. Мұндай кештерді жиі ұйымдастырған жөн, себебі олар көңіл-күйді көтеріп, жалпы әл-ауқатты жақсартуға көмектеседі.');
INSERT INTO public.journal_summaries (id, date, entry_count, generated_at, user_id, summary_ru, summary_kk) VALUES (14, '2025-05-12', 0, '2025-05-12 18:49:18.347638+00', 14, 'На сегодня нет записей. Возможно, это был спокойный день без особых событий. Рекомендуется выделять время для рефлексии и записи мыслей, даже если день кажется обычным.', 'Бүгінгі күнге жазбалар жоқ. Мүмкін, бұл ерекше оқиғасыз тыныш күн болған шығар. Күнделікті ойларыңызды жазуға және рефлексиялауға уақыт бөлуді ұсынамын, тіпті күн қарапайым болса да.');


--
-- Data for Name: malls; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.malls (latitude1, latitude2, longitude1, longitude2, id, defaultnotification, name, image_url) VALUES (43.2549, 43.25444, 76.88619, 76.88681, 2, 'Молл Апорт— это современный торгово-развлекательный комплекс', 'home', NULL);
INSERT INTO public.malls (latitude1, latitude2, longitude1, longitude2, id, defaultnotification, name, image_url) VALUES (43.2549, 43.25444, 76.88619, 76.88681, 3, 'Молл Апорт— это современный торгово-развлекательный комплекс', 'homeroz', 'akbfkjasbfkjabf');
INSERT INTO public.malls (latitude1, latitude2, longitude1, longitude2, id, defaultnotification, name, image_url) VALUES (43.26481, 43.26325, 76.92804, 76.93073, 1, 'MEGA Park получил свое название благодаря озеленению территории, ', 'MEGA Park', NULL);


--
-- Data for Name: mass_push_notifications; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: meditation_history; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.meditation_history (id, category_id, created_at, finished, last_played_at, meditation_id, "position", updated_at, user_id) VALUES (1, 1, '2025-05-10 12:05:51.972892', false, '2025-05-05 12:34:56', 1, 245, '2025-05-11 16:44:54.990417', 11);
INSERT INTO public.meditation_history (id, category_id, created_at, finished, last_played_at, meditation_id, "position", updated_at, user_id) VALUES (3, 5, '2025-05-11 16:58:05.635648', false, '2025-05-11 10:58:06.62', 25, 2, '2025-05-11 16:58:05.635691', 11);
INSERT INTO public.meditation_history (id, category_id, created_at, finished, last_played_at, meditation_id, "position", updated_at, user_id) VALUES (2, 1, '2025-05-11 16:53:39.928359', false, '2025-05-11 16:53:22.958', 2, 66, '2025-05-11 22:53:23.097942', 11);
INSERT INTO public.meditation_history (id, category_id, created_at, finished, last_played_at, meditation_id, "position", updated_at, user_id) VALUES (4, 1, '2025-05-12 23:59:52.891124', false, '2025-05-12 18:00:09.179', 3, 755, '2025-05-13 00:00:09.208636', 11);


--
-- Data for Name: outlets; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.264222, 43.263949, 76.92935, 76.929911, 1, 1, 'Fashion', 'H & M', NULL, NULL);
INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.26371, 43.26338, 76.92905, 76.92943, 2, 1, 'Fashion', 'Pull & Bear', NULL, NULL);
INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.26371, 43.26338, 76.92905, 76.92943, 3, 1, 'Fashion', 'Pull & Bear', NULL, NULL);
INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.26371, 43.26338, 76.92905, 76.92943, 4, 1, 'Fashion', 'Pull & Bear', NULL, 'akbfkjasbfkjabf');
INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.26371, 43.26338, 76.92905, 76.92943, 5, 1, 'Fashion', 'Pull & Bear', 'Добро пожаловать в магазин Pull & Bear', 'akbfkjasbfkjabf');
INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.26371, 43.26338, 76.92905, 76.92943, 6, 2, 'Fashion', 'Pull & Bear', 'Добро пожаловать в магазин Pull & Bear', 'akbfkjasbfkjabf');
INSERT INTO public.outlets (latitude1, latitude2, longitude1, longitude2, id, mall_id, category, name, default_notification, image_url) VALUES (43.26371, 43.26338, 76.92905, 76.92943, 8, 2, 'Fashion', 'Pull & Bear', 'Добро пожаловать в магазин Pull & Bear', 'akbfkjasbfkjabf');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.sales (id, description, end_time, image_url, start_time, title, outlet_id) VALUES (1, 'Discounts on all summer clothing items!', '2024-06-30 22:00:00', 'https://example.com/images/sale.jpg', '2024-06-01 10:00:00', 'Summer Sale', 1);
INSERT INTO public.sales (id, description, end_time, image_url, start_time, title, outlet_id) VALUES (2, 'Discounts on all summer clothing items!', '2024-06-30 22:00:00', 'https://example.com/images/sale.jpg', '2024-06-01 10:00:00', 'Summer Sale', 3);


--
-- Data for Name: sleep_categories; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.sleep_categories (id, code, description, name) VALUES (1, 'CORE', 'От 3 до 6 часов сна', 'Основной');
INSERT INTO public.sleep_categories (id, code, description, name) VALUES (2, 'INSOMNIAC', 'Менее 3 ', 'Бессонница');
INSERT INTO public.sleep_categories (id, code, description, name) VALUES (0, 'NORMAL', 'От 7', 'Нормальный');


--
-- Data for Name: sleep_entries; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('70e4e077-0cd7-47c5-893e-7fb0718f2013', '2025-05-01 17:16:35.857023+00', '2025-05-01', 8.5, '2025-05-02 07:30:00', '2025-05-01 23:00:00', 11, 0);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('d53669c1-a89f-4f18-b714-163ad7c2fa3d', '2025-05-02 16:23:38.698286+00', '2025-05-02', 5.5, '2025-05-03 04:30:00', '2025-05-02 23:00:00', NULL, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('f853e0f6-b8c1-4f99-bdd5-54ce67bdaf74', '2025-05-02 16:31:54.668131+00', '2025-05-02', 5.5, '2025-05-03 04:30:00', '2025-05-02 23:00:00', 11, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('9e31c086-d234-4962-89d7-c75120f794c6', '2025-05-02 16:33:24.594299+00', '2025-05-03', 5.5, '2025-05-04 04:30:00', '2025-05-03 23:00:00', 11, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('9e2f24e4-97d5-4fac-bccd-eee9689e42f1', '2025-05-02 16:34:12.053989+00', '2025-05-01', 5.5, '2025-05-02 04:30:00', '2025-05-01 23:00:00', 11, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('dcede6b6-499a-4055-bc61-19b221df41cd', '2025-05-02 16:34:25.157056+00', '2025-04-30', 5.5, '2025-05-01 04:30:00', '2025-04-30 23:00:00', 11, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('7c6eb6b7-0edc-430e-9fec-571869b1130c', '2025-05-02 16:46:31.791678+00', '2025-04-30', 5.5, '2025-05-01 04:30:00', '2025-04-30 23:00:00', 11, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('5e52e3d7-d18c-46b9-b5f4-a3647037ccb7', '2025-05-08 11:06:26.560729+00', '2025-04-30', 5.5, '2025-05-01 04:30:00', '2025-04-30 23:00:00', 11, 1);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('61aff99c-f311-4c49-96c1-a520bfe060b2', '2025-05-08 11:07:55.948846+00', '2025-05-08', 7, '2025-05-09 06:00:00', '2025-05-08 23:00:00', 11, 0);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('183f02a3-df69-4d86-a6f5-39cb9ae2497b', '2025-05-08 11:08:21.992061+00', '2025-05-08', 7, '2025-05-09 06:00:00', '2025-05-08 23:00:00', 11, 0);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('f8260871-65f9-4e0d-bc84-20467bd8bbbd', '2025-05-11 09:55:18.701918+00', '2025-05-10', 7.5, '2025-05-11 06:30:00', '2025-05-10 23:00:00', 11, 0);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('1eca4394-ff04-4289-bbbc-0712ef460a2a', '2025-05-11 10:02:11.567024+00', '2025-05-10', 9.5, '2025-05-11 08:30:00', '2025-05-10 23:00:00', 11, 0);
INSERT INTO public.sleep_entries (id, created_at, date, duration_hours, end_time, start_time, user_id, category_id) VALUES ('53c94f6d-9e67-42af-9373-e3e82305064a', '2025-05-12 17:54:59.204125+00', '2025-05-11', 7, '2025-05-12 06:00:00', '2025-05-11 23:00:00', 11, 0);


--
-- Data for Name: system_prompts; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: users_roles; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Data for Name: z_notice_push_rules; Type: TABLE DATA; Schema: public; Owner: admin
--



--
-- Name: ai_suggestion_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.ai_suggestion_seq', 1, false);


--
-- Name: balance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.balance_id_seq', 13, true);


--
-- Name: chat_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.chat_history_id_seq', 44, true);


--
-- Name: chatbot_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.chatbot_categories_id_seq', 5, true);


--
-- Name: daily_goals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.daily_goals_id_seq', 6, true);


--
-- Name: firebase_user_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.firebase_user_userid_seq', 13, true);


--
-- Name: journal_summaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.journal_summaries_id_seq', 14, true);


--
-- Name: malls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.malls_id_seq', 3, true);


--
-- Name: mass_push_notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.mass_push_notifications_id_seq', 1, false);


--
-- Name: meditation_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.meditation_history_id_seq', 4, true);


--
-- Name: ourusers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.ourusers_id_seq', 14, true);


--
-- Name: outlets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.outlets_id_seq', 8, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.role_id_seq', 1, false);


--
-- Name: sales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.sales_id_seq', 2, true);


--
-- Name: system_prompts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.system_prompts_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: z_notice_push_rules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.z_notice_push_rules_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

