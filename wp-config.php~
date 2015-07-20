<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ipi');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         's7.DnERGNOPSs_I9q|A`+pN-up+94HEG,O>qrvCgvZ3#,USNx<+@8lc_dLUS}[8s');
define('SECURE_AUTH_KEY',  'qFJ:j-Vwnv8 ,M^B=slXj({P%/d-EAae[#&1W=;~yYq(d`MMG-Ye[0=,`g3z#ed-');
define('LOGGED_IN_KEY',    ',OA6G|$6hp~JidH~muIcr!tT/hPIL]f2ZD!G2D}a+`Z>ui*/Z.{s|I0? xw,/IMD');
define('NONCE_KEY',        'ui}{vC];#h?3[VuA8+HfV|yNR-{`&;]q>CN5@||5Up#A;s/O?8`L[/j-!^>_#roU');
define('AUTH_SALT',        'c|SDi<Zk$Ug!vg{gx~t^IC7gZz;$Dc,ya:iXAmmfmB10pjqwOh*z~u+tL,!y^q?3');
define('SECURE_AUTH_SALT', 'T+q:T(~|A?eF%F6n#0h^e&BPTC,RJZL`Y`EiiIb3w<Y}/o< q9PGhbw}IXzza+2(');
define('LOGGED_IN_SALT',   's7S(,!f9hT/-tkE.gDDM^f1qlxO+Wg>^XU7k(Tp]BODUFXg^{xr}Yn qJJ}sNhi&');
define('NONCE_SALT',       'yIg^Jp#Pp-+WuJ!X#CF|dr3z5d.YiwUCq+/J3=h,v>ZV|V]-?2fGWA 5DMbFptG#');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';
define('WP_MEMORY_LIMIT', '64M');
set_time_limit(0); // at the top
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
