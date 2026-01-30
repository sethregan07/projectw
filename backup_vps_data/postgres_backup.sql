--
-- PostgreSQL database cluster dump
--

\restrict gTsJbtPjM3vF2Wa4hUsIGNC3KgzKteGaivd1iOC8T8DSME2FSlPeNKLYzVBCN3k

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE analytics_admin;
ALTER ROLE analytics_admin WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:a7ljW6E4EmRZARccfnT0/Q==$v1HKcKMjIQFc8L5KtMLStDysidLAtPsNzS/l5Rv8czg=:YpgYnM54DGhb6TRf4pIvrfLaApAu66zEKq1SpaLwxkE=';
CREATE ROLE analytics_reader;
ALTER ROLE analytics_reader WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:WBO12F2GYvgrpSqmj6tJvA==$W+FjPM8doLhIM6Jbe4EaDt5xF2TCiVcCx2lBNmHyIOs=:OBN/P4FTbsg0izdqmivuh1O+XVMQyqB+aNc7koJwpd4=';
CREATE ROLE auth_admin;
ALTER ROLE auth_admin WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:ApnGNwTZfuLRQVIIO7y2Yw==$2Aijqt6WXoRq4tpENp97yDCA5BuTk7HxYsDjYU3v/KU=:sP5RC5oypXd4EHCoWliV4PSORLgc4Og7wd+F0SKY8qQ=';
CREATE ROLE backup_user;
ALTER ROLE backup_user WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:Bt8LT2Odn7FrGH5o5d5IjA==$xSkfoOsqzApLQQXJMkA9lr4j6xcmsBhDdN1r7SNe2yc=:Me1z4VJAXBu/bHZcLYXHW86ZHut8eFlu0mZpoQK/u98=';
CREATE ROLE ghost_admin;
ALTER ROLE ghost_admin WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:vltHQRw0WCZBeEaxWj4CDg==$K19cFY9jnTcOGaw9G1Zlc6OtB5o6r42yvdDbQA78dw4=:crnW9OTnaAiYQ+d68MZcwrzaq3TfFmppjvXO4KJeZWY=';
CREATE ROLE mautic_admin;
ALTER ROLE mautic_admin WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:AfBI2Cz7E2a3a9XcBPiy+Q==$16mw9ELbnfL5BmR8NK9tAOsG0FqMZO4mV6DpzH9xElw=:KharAVysD8pVob2fA9KYSn3sGbhXAFORgPmQt6VBwZM=';
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:CmC+Z0JNcNtutPA+UGL5NQ==$Pf2pL9MyXg2tGxp1Az+DOTshzBuNKW1jrRcgbDU09HQ=:lfMRT66jDW9c20yYgz5ru9GU6MprC5T6xy+m+rGNgYQ=';

--
-- User Configurations
--








\unrestrict gTsJbtPjM3vF2Wa4hUsIGNC3KgzKteGaivd1iOC8T8DSME2FSlPeNKLYzVBCN3k

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict eUByOZLeZfyuaLaEyea3mfU3H0mBcbAbC9BuAQd8jzTdVamh16tRnOKX9HNyPOR

-- Dumped from database version 15.14
-- Dumped by pg_dump version 15.14

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
-- PostgreSQL database dump complete
--

\unrestrict eUByOZLeZfyuaLaEyea3mfU3H0mBcbAbC9BuAQd8jzTdVamh16tRnOKX9HNyPOR

--
-- Database "analytics_db" dump
--

--
-- PostgreSQL database dump
--

\restrict pB84s4iC28prF5ORCkwxnf4xiQY4WTCwaObGozbCYhc70T3PPIg6RkiJhdGuqsi

-- Dumped from database version 15.14
-- Dumped by pg_dump version 15.14

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
-- Name: analytics_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE analytics_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE analytics_db OWNER TO postgres;

\unrestrict pB84s4iC28prF5ORCkwxnf4xiQY4WTCwaObGozbCYhc70T3PPIg6RkiJhdGuqsi
\connect analytics_db
\restrict pB84s4iC28prF5ORCkwxnf4xiQY4WTCwaObGozbCYhc70T3PPIg6RkiJhdGuqsi

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: page_views; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.page_views (
    id integer NOT NULL,
    user_id integer,
    session_id character varying(255) NOT NULL,
    page_url character varying(255) NOT NULL,
    referrer_url character varying(255),
    user_agent text,
    ip_address character varying(45),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.page_views OWNER TO postgres;

--
-- Name: page_views_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.page_views_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.page_views_id_seq OWNER TO postgres;

--
-- Name: page_views_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.page_views_id_seq OWNED BY public.page_views.id;


--
-- Name: user_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_events (
    id integer NOT NULL,
    user_id integer,
    session_id character varying(255) NOT NULL,
    event_type character varying(50) NOT NULL,
    event_data jsonb,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.user_events OWNER TO postgres;

--
-- Name: user_events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_events_id_seq OWNER TO postgres;

--
-- Name: user_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_events_id_seq OWNED BY public.user_events.id;


--
-- Name: page_views id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_views ALTER COLUMN id SET DEFAULT nextval('public.page_views_id_seq'::regclass);


--
-- Name: user_events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_events ALTER COLUMN id SET DEFAULT nextval('public.user_events_id_seq'::regclass);


--
-- Data for Name: page_views; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.page_views (id, user_id, session_id, page_url, referrer_url, user_agent, ip_address, created_at) FROM stdin;
\.


--
-- Data for Name: user_events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_events (id, user_id, session_id, event_type, event_data, created_at) FROM stdin;
\.


--
-- Name: page_views_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.page_views_id_seq', 1, false);


--
-- Name: user_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_events_id_seq', 1, false);


--
-- Name: page_views page_views_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_views
    ADD CONSTRAINT page_views_pkey PRIMARY KEY (id);


--
-- Name: user_events user_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_pkey PRIMARY KEY (id);


--
-- Name: idx_page_views_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_page_views_created_at ON public.page_views USING btree (created_at);


--
-- Name: idx_page_views_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_page_views_user_id ON public.page_views USING btree (user_id);


--
-- Name: idx_user_events_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_events_created_at ON public.user_events USING btree (created_at);


--
-- Name: idx_user_events_event_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_events_event_type ON public.user_events USING btree (event_type);


--
-- Name: idx_user_events_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_events_user_id ON public.user_events USING btree (user_id);


--
-- Name: DATABASE analytics_db; Type: ACL; Schema: -; Owner: postgres
--

GRANT CONNECT ON DATABASE analytics_db TO analytics_reader;
GRANT ALL ON DATABASE analytics_db TO analytics_admin;
GRANT CONNECT ON DATABASE analytics_db TO backup_user;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO analytics_reader;
GRANT USAGE ON SCHEMA public TO backup_user;


--
-- Name: TABLE page_views; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.page_views TO analytics_reader;
GRANT SELECT ON TABLE public.page_views TO backup_user;


--
-- Name: TABLE user_events; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.user_events TO analytics_reader;
GRANT SELECT ON TABLE public.user_events TO backup_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT ON TABLES  TO analytics_reader;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT ON TABLES  TO backup_user;


--
-- PostgreSQL database dump complete
--

\unrestrict pB84s4iC28prF5ORCkwxnf4xiQY4WTCwaObGozbCYhc70T3PPIg6RkiJhdGuqsi

--
-- Database "auth_db" dump
--

--
-- PostgreSQL database dump
--

\restrict nRHeruAew7lG2CsAsvZPkmGSLTK3Jo15CRCwD62eMStIMjO6IPGZpOA4KI4tjEU

-- Dumped from database version 15.14
-- Dumped by pg_dump version 15.14

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
-- Name: auth_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE auth_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE auth_db OWNER TO postgres;

\unrestrict nRHeruAew7lG2CsAsvZPkmGSLTK3Jo15CRCwD62eMStIMjO6IPGZpOA4KI4tjEU
\connect auth_db
\restrict nRHeruAew7lG2CsAsvZPkmGSLTK3Jo15CRCwD62eMStIMjO6IPGZpOA4KI4tjEU

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: login_attempts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.login_attempts (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    ip_address character varying(45),
    success boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.login_attempts OWNER TO postgres;

--
-- Name: login_attempts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.login_attempts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.login_attempts_id_seq OWNER TO postgres;

--
-- Name: login_attempts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.login_attempts_id_seq OWNED BY public.login_attempts.id;


--
-- Name: refresh_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.refresh_tokens (
    id integer NOT NULL,
    user_id integer,
    token character varying(255) NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.refresh_tokens OWNER TO postgres;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.refresh_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.refresh_tokens_id_seq OWNER TO postgres;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.refresh_tokens_id_seq OWNED BY public.refresh_tokens.id;


--
-- Name: user_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_profiles (
    id integer NOT NULL,
    user_id integer,
    bio text,
    avatar_url character varying(255),
    location character varying(100),
    website character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.user_profiles OWNER TO postgres;

--
-- Name: user_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_profiles_id_seq OWNER TO postgres;

--
-- Name: user_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_profiles_id_seq OWNED BY public.user_profiles.id;


--
-- Name: user_settings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_settings (
    id integer NOT NULL,
    user_id integer,
    email_notifications boolean DEFAULT true,
    two_factor_enabled boolean DEFAULT false,
    theme character varying(50) DEFAULT 'light'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.user_settings OWNER TO postgres;

--
-- Name: user_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_settings_id_seq OWNER TO postgres;

--
-- Name: user_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_settings_id_seq OWNED BY public.user_settings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(50) DEFAULT 'user'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: login_attempts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login_attempts ALTER COLUMN id SET DEFAULT nextval('public.login_attempts_id_seq'::regclass);


--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('public.refresh_tokens_id_seq'::regclass);


--
-- Name: user_profiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles ALTER COLUMN id SET DEFAULT nextval('public.user_profiles_id_seq'::regclass);


--
-- Name: user_settings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_settings ALTER COLUMN id SET DEFAULT nextval('public.user_settings_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: login_attempts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.login_attempts (id, email, ip_address, success, created_at) FROM stdin;
1	test@example.com	::ffff:172.18.0.1	t	2025-11-09 12:34:05.322438
2	24k3ycoo3@mozmail.com	::ffff:175.101.105.184	t	2025-11-09 12:34:27.478024
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.refresh_tokens (id, user_id, token, expires_at, created_at) FROM stdin;
1	1	de72af506f1654eee52df7823811eff274aeac2ea0305b2a937831f0853160212025882b190da937	2025-12-09 12:34:05.32	2025-11-09 12:34:05.320506
2	2	fbc8354a68e0a80afc34def3774993bcb612c05baf3cde3bea21a5437a883e78361d9d8c7d2088ad	2025-12-09 12:34:27.476	2025-11-09 12:34:27.476435
\.


--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_profiles (id, user_id, bio, avatar_url, location, website, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: user_settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_settings (id, user_id, email_notifications, two_factor_enabled, theme, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, role, created_at, updated_at) FROM stdin;
1	Test User	test@example.com	$2a$10$y/ikaYNB2ip3EYAT6YA16.n70iwM3lz90lZx1tXE4Lj.f69YaWlh6	user	2025-11-09 12:34:05.315076	2025-11-09 12:34:05.315076
2	remo	24k3ycoo3@mozmail.com	$2a$10$.C2rFZfuCwU4lawiI0azm.6t/m/8sLBtPWS/0cqWF3/IVI/6Fzeua	user	2025-11-09 12:34:27.472071	2025-11-09 12:34:27.472071
\.


--
-- Name: login_attempts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.login_attempts_id_seq', 2, true);


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.refresh_tokens_id_seq', 2, true);


--
-- Name: user_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_profiles_id_seq', 1, false);


--
-- Name: user_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_settings_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: login_attempts login_attempts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login_attempts
    ADD CONSTRAINT login_attempts_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_token_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_token_key UNIQUE (token);


--
-- Name: user_profiles user_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_pkey PRIMARY KEY (id);


--
-- Name: user_profiles user_profiles_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_user_id_key UNIQUE (user_id);


--
-- Name: user_settings user_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_pkey PRIMARY KEY (id);


--
-- Name: user_settings user_settings_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_user_id_key UNIQUE (user_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: idx_login_attempts_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_login_attempts_created_at ON public.login_attempts USING btree (created_at);


--
-- Name: idx_login_attempts_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_login_attempts_email ON public.login_attempts USING btree (email);


--
-- Name: idx_refresh_tokens_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_refresh_tokens_user_id ON public.refresh_tokens USING btree (user_id);


--
-- Name: idx_users_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_email ON public.users USING btree (email);


--
-- Name: refresh_tokens refresh_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_profiles user_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_settings user_settings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_settings
    ADD CONSTRAINT user_settings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: DATABASE auth_db; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE auth_db TO auth_admin;
GRANT CONNECT ON DATABASE auth_db TO backup_user;


--
-- PostgreSQL database dump complete
--

\unrestrict nRHeruAew7lG2CsAsvZPkmGSLTK3Jo15CRCwD62eMStIMjO6IPGZpOA4KI4tjEU

--
-- Database "ghost_db" dump
--

--
-- PostgreSQL database dump
--

\restrict tWu5kDbDR9EkbQi01UbsVh6ajdG3OtTTQGFg2lg3YpQPdAPIzNXtl71qDFMjx62

-- Dumped from database version 15.14
-- Dumped by pg_dump version 15.14

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
-- Name: ghost_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE ghost_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE ghost_db OWNER TO postgres;

\unrestrict tWu5kDbDR9EkbQi01UbsVh6ajdG3OtTTQGFg2lg3YpQPdAPIzNXtl71qDFMjx62
\connect ghost_db
\restrict tWu5kDbDR9EkbQi01UbsVh6ajdG3OtTTQGFg2lg3YpQPdAPIzNXtl71qDFMjx62

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
-- Name: DATABASE ghost_db; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE ghost_db TO ghost_admin;
GRANT CONNECT ON DATABASE ghost_db TO backup_user;


--
-- PostgreSQL database dump complete
--

\unrestrict tWu5kDbDR9EkbQi01UbsVh6ajdG3OtTTQGFg2lg3YpQPdAPIzNXtl71qDFMjx62

--
-- Database "mautic_db" dump
--

--
-- PostgreSQL database dump
--

\restrict uR64kqjIToi8oYlRr7afrrUjXpR2z69RAQbUmKpltMnXCfyvSATnp8dRgeho2mu

-- Dumped from database version 15.14
-- Dumped by pg_dump version 15.14

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
-- Name: mautic_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE mautic_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE mautic_db OWNER TO postgres;

\unrestrict uR64kqjIToi8oYlRr7afrrUjXpR2z69RAQbUmKpltMnXCfyvSATnp8dRgeho2mu
\connect mautic_db
\restrict uR64kqjIToi8oYlRr7afrrUjXpR2z69RAQbUmKpltMnXCfyvSATnp8dRgeho2mu

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
-- Name: DATABASE mautic_db; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE mautic_db TO mautic_admin;
GRANT CONNECT ON DATABASE mautic_db TO backup_user;


--
-- PostgreSQL database dump complete
--

\unrestrict uR64kqjIToi8oYlRr7afrrUjXpR2z69RAQbUmKpltMnXCfyvSATnp8dRgeho2mu

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict zw4ZpE2z7Cb2pGqbsmjDBW8f3PcfeawTKYJhvPoL3DnSTTFdDT2XAUs8kxy0c5V

-- Dumped from database version 15.14
-- Dumped by pg_dump version 15.14

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
-- PostgreSQL database dump complete
--

\unrestrict zw4ZpE2z7Cb2pGqbsmjDBW8f3PcfeawTKYJhvPoL3DnSTTFdDT2XAUs8kxy0c5V

--
-- PostgreSQL database cluster dump complete
--

