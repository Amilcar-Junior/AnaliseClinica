# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: analise_recolhas
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `analise_recolhas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `outro` varchar(255) DEFAULT NULL,
  `assinatura` varchar(255) DEFAULT NULL,
  `hemograma_completo` tinyint(1) DEFAULT NULL,
  `hemoglobina` tinyint(1) DEFAULT NULL,
  `hematocriot` tinyint(1) DEFAULT NULL,
  `urela` tinyint(1) DEFAULT NULL,
  `creatinina` tinyint(1) DEFAULT NULL,
  `aci_urico` tinyint(1) DEFAULT NULL,
  `got` tinyint(1) DEFAULT NULL,
  `gpt` tinyint(1) DEFAULT NULL,
  `bb_total` tinyint(1) DEFAULT NULL,
  `bb_directa` tinyint(1) DEFAULT NULL,
  `proteina_total` tinyint(1) DEFAULT NULL,
  `vsg` tinyint(1) DEFAULT NULL,
  `prc` tinyint(1) DEFAULT NULL,
  `widal` tinyint(1) DEFAULT NULL,
  `fr` tinyint(1) DEFAULT NULL,
  `taso` tinyint(1) DEFAULT NULL,
  `vdrl` tinyint(1) DEFAULT NULL,
  `aghbs` tinyint(1) DEFAULT NULL,
  `anti_hcv` tinyint(1) DEFAULT NULL,
  `trigliceridos` tinyint(1) DEFAULT NULL,
  `colest_total` tinyint(1) DEFAULT NULL,
  `hdl` tinyint(1) DEFAULT NULL,
  `ldl` tinyint(1) DEFAULT NULL,
  `hb1ac` tinyint(1) DEFAULT NULL,
  `glicemia` tinyint(1) DEFAULT NULL,
  `ptg` tinyint(1) DEFAULT NULL,
  `amilase` tinyint(1) DEFAULT NULL,
  `ggt` tinyint(1) DEFAULT NULL,
  `fa` tinyint(1) DEFAULT NULL,
  `sodio` tinyint(1) DEFAULT NULL,
  `calcio` tinyint(1) DEFAULT NULL,
  `fosforo` tinyint(1) DEFAULT NULL,
  `gota_espessa` tinyint(1) DEFAULT NULL,
  `dengue_igm` tinyint(1) DEFAULT NULL,
  `denge_igg` tinyint(1) DEFAULT NULL,
  `tempo_coag` tinyint(1) DEFAULT NULL,
  `tempo_sang` tinyint(1) DEFAULT NULL,
  `tempo_protombina` tinyint(1) DEFAULT NULL,
  `grupo_sang` tinyint(1) DEFAULT NULL,
  `psa_total` tinyint(1) DEFAULT NULL,
  `tsh` tinyint(1) DEFAULT NULL,
  `t3` tinyint(1) DEFAULT NULL,
  `t4` tinyint(1) DEFAULT NULL,
  `baciloscopia` tinyint(1) DEFAULT NULL,
  `ex_vaginal` tinyint(1) DEFAULT NULL,
  `urina_ii` tinyint(1) DEFAULT NULL,
  `ex_fezes` tinyint(1) DEFAULT NULL,
  `hiv` tinyint(1) DEFAULT NULL,
  `toxoplasmose` tinyint(1) DEFAULT NULL,
  `rubeola_igg` tinyint(1) DEFAULT NULL,
  `rubeola_igm` tinyint(1) DEFAULT NULL,
  `citomegalovirus` tinyint(1) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: backups
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `backups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `strapiVersion` varchar(255) NOT NULL,
  `adminVersion` varchar(255) NOT NULL,
  `dbEngine` varchar(255) DEFAULT NULL,
  `identifier` varchar(255) NOT NULL,
  `manual` tinyint(1) NOT NULL,
  `backupPath` varchar(255) NOT NULL,
  `hasDB` tinyint(1) DEFAULT NULL,
  `hasUploads` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: core_store
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `core_store` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 46 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: i18n_locales
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `i18n_locales` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `i18n_locales_code_unique` (`code`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: logs
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data` datetime DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `users_permissions_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 78 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: pacientes
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `pacientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `data_nascimento` datetime DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `telefone` int(11) DEFAULT NULL,
  `bi` varchar(255) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: recolhas
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `recolhas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `hematologia` tinyint(1) DEFAULT NULL,
  `heamatologia_a` tinyint(1) DEFAULT NULL,
  `hematologia_b` tinyint(1) DEFAULT NULL,
  `bioquimica_i` tinyint(1) DEFAULT NULL,
  `bioquimica_ii` tinyint(1) DEFAULT NULL,
  `bioquimica_iii` tinyint(1) DEFAULT NULL,
  `imunoserologia` tinyint(1) DEFAULT NULL,
  `urina_ii` tinyint(1) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `assinatura` varchar(255) DEFAULT NULL,
  `outro` varchar(255) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `imunoserologia_a` tinyint(1) DEFAULT NULL,
  `paciente` int(11) DEFAULT NULL,
  `dados_clinicos` varchar(255) DEFAULT NULL,
  `resultado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: resultados
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `resultados` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `hematologia_rdw_cv` int(11) DEFAULT NULL,
  `hematologia_eritrocitos` int(11) DEFAULT NULL,
  `hematologia_hemoglobina` int(11) DEFAULT NULL,
  `hematologia_hematocrito` int(11) DEFAULT NULL,
  `hematologia_vgm` int(11) DEFAULT NULL,
  `hematologia_hgm` int(11) DEFAULT NULL,
  `hematologia_chgm` int(11) DEFAULT NULL,
  `hematologia_paquetas` int(11) DEFAULT NULL,
  `hematologia_leucocitos` int(11) DEFAULT NULL,
  `hematologia_neutrofilos` int(11) DEFAULT NULL,
  `hematologia_eosinofilos` int(11) DEFAULT NULL,
  `hematologia_basofilos` int(11) DEFAULT NULL,
  `hematologia_linfocitos` int(11) DEFAULT NULL,
  `hematologia_monocitos` int(11) DEFAULT NULL,
  `hematologia_bandas` int(11) DEFAULT NULL,
  `hematologia_a_globulos_v` int(11) DEFAULT NULL,
  `hematologia_a_hemoglobina` int(11) DEFAULT NULL,
  `hematologia_a_hematocrito` int(11) DEFAULT NULL,
  `hematologia_a_vgm` int(11) DEFAULT NULL,
  `hematologia_a_hgm` int(11) DEFAULT NULL,
  `hematologia_a_chgm` int(11) DEFAULT NULL,
  `hematologia_a_globulos_b` int(11) DEFAULT NULL,
  `hematologia_a_neutrofilos` int(11) DEFAULT NULL,
  `hematologia_a_eosinofilos` int(11) DEFAULT NULL,
  `hematologia_a_basofilos` int(11) DEFAULT NULL,
  `hematologia_a_linfocitos` int(11) DEFAULT NULL,
  `hematologia_a_monocitos` int(11) DEFAULT NULL,
  `hematologia_a_bandas` int(11) DEFAULT NULL,
  `hematologia_a_paquetas` int(11) DEFAULT NULL,
  `hematologia_b_tp` int(11) DEFAULT NULL,
  `hematologia_b_inr` int(11) DEFAULT NULL,
  `hematologia_b_pesq` int(11) DEFAULT NULL,
  `bioquimica_i_glicose` int(11) DEFAULT NULL,
  `bioquimica_i_ureia` int(11) DEFAULT NULL,
  `bioquimica_i_acido_u` int(11) DEFAULT NULL,
  `bioquimica_i_creatinina` int(11) DEFAULT NULL,
  `bioquimica_i_got` int(11) DEFAULT NULL,
  `bioquimica_i_gpt` int(11) DEFAULT NULL,
  `bioquimica_ii_ldh` int(11) DEFAULT NULL,
  `bioquimica_ii_cpk` int(11) DEFAULT NULL,
  `bioquimica_ii_ck_mb` int(11) DEFAULT NULL,
  `bioquimica_ii_troponina_i` int(11) DEFAULT NULL,
  `bioquimica_iii_sodio` int(11) DEFAULT NULL,
  `bioquimica_iii_potassio` int(11) DEFAULT NULL,
  `imunoserologia_vdrl` varchar(255) DEFAULT NULL,
  `imunoserologia_widal` varchar(255) DEFAULT NULL,
  `imunoserologia_a_pcr` int(11) DEFAULT NULL,
  `urina_ii_glicosuria` int(11) DEFAULT NULL,
  `urina_ii_proteinuria` int(11) DEFAULT NULL,
  `urina_ii_cetonuria` int(11) DEFAULT NULL,
  `urina_ii_sangue` int(11) DEFAULT NULL,
  `urina_ii_nitrito` int(11) DEFAULT NULL,
  `urina_ii_ph` int(11) DEFAULT NULL,
  `urina_ii_densidade` int(11) DEFAULT NULL,
  `urina_ii_celulas` int(11) DEFAULT NULL,
  `urina_ii_leucocitos` int(11) DEFAULT NULL,
  `urina_ii_eritrocitos` int(11) DEFAULT NULL,
  `observacao` longtext DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `paciente` int(11) DEFAULT NULL,
  `recolha` int(11) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: strapi_administrator
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `strapi_administrator` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `registrationToken` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `preferedLanguage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_administrator_email_unique` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: strapi_permission
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `strapi_permission` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `properties` longtext DEFAULT NULL,
  `conditions` longtext DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 729 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: strapi_role
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `strapi_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_role_name_unique` (`name`),
  UNIQUE KEY `strapi_role_code_unique` (`code`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: strapi_users_roles
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `strapi_users_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: strapi_webhooks
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `strapi_webhooks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` longtext DEFAULT NULL,
  `headers` longtext DEFAULT NULL,
  `events` longtext DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: testes
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `testes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `idade` bigint(20) DEFAULT NULL,
  `data_nascimento` datetime DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 26 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: upload_file
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `upload_file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `alternativeText` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `formats` longtext DEFAULT NULL,
  `hash` varchar(255) NOT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) NOT NULL,
  `size` decimal(10, 2) NOT NULL,
  `url` varchar(255) NOT NULL,
  `previewUrl` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_metadata` longtext DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: upload_file_morph
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `upload_file_morph` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `upload_file_id` int(11) DEFAULT NULL,
  `related_id` int(11) DEFAULT NULL,
  `related_type` longtext DEFAULT NULL,
  `field` longtext DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users-permissions_permission
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users-permissions_permission` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `controller` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `policy` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 769 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users-permissions_role
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users-permissions_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_role_type_unique` (`type`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users-permissions_user
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users-permissions_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `confirmationToken` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `telefone` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `endereco` varchar(255) DEFAULT NULL,
  `especicalidade` varchar(255) DEFAULT NULL,
  `especialidade` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_user_username_unique` (`username`)
) ENGINE = InnoDB AUTO_INCREMENT = 12 DEFAULT CHARSET = utf8mb4;

