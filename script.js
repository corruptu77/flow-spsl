const vocab = // Symbols
  ["+","-","*","/","^","%", // Operators
   "(",")","[","]","{","}","「","」", // Containers
   "=", "==", "===", "!=", "!==", // Boolean factors
   "<",">","<=",">=", 
   "!!","||","&&","##", // Boolean Gates
  "!","#","$","&", // Bitstring (Bitwise)
  "@",
  "//","\\","'",'"',"`",
  "nest","node","portal", // Data modifiers
  "var","let","const","gl","conf", // Data types
  "class","id","bitstring", // Data modifiers types (Users can assign their own types, but these are reserved by the compiler)
  "function","return","if","else","while","for","break","continue","switch","case","default","try","catch","finally","concurrent","match",
  // Including this on a different line because it is so fucking long
  "import","export","from","as","extends","super","this",
  "new","delete","in","of","instanceof",
  "string","insert","removed","replace","strigify","strigparse","strigmatch","strigsearch","strigsplit","strigjoin","strigtrim","strigpadstart","strigpadend","strigtolowercase","strigtouppercase","stringsplit","stringreplace",
  "array","insert","removed","replace","arrayify","arrayparse","arraymatch","arraysearch","arraysplit","arrayjoin","arraytrim","arraypadstart","arraypadend",
  "object","insert","removed","replace","objectify","objectparse","objectmatch","objectsearch","objectsplit","objectjoin","objecttrim",
  // String modifiers
  "number","bit_length","bit_endian","bit_signed","bit_unsigned","bit_float","bit_double","bit_int8","bit_int16","bit_int32","bit_int64","bit_uint8","bit_uint16","bit_uint32","bit_uint64",
  "bit_float32","bit_float64","bit_bigint64","bit_biguint64",
  "bit_string","bit_array","bit_object","int_unsigned","int_signed","int_float","int_double","int_bigint",
  "int8","int16","int32","int64","uint8","uint16","uint32","uint64",
  "float32","float64","bigint64","biguint64",
  "string_string","string_array","string_object",
  "custom_length","custom_endian","custom_signed","custom_unsigned","custom_float","custom_double","custom_int8","custom_int16","custom_int32","custom_int64","custom_uint8","custom_uint16","custom_uint32","custom_uint64",
  "custom_float32","custom_float64","custom_bigint64","custom_biguint64",
  "custom_string","custom_array","custom_object","integer_imaginary","integer_real","integer_complex","integer_rational","integer_prime","integer_composite","integer_even","integer_odd",
  "integer_fibonacci","integer_factorial","integer_perfect","integer_abundant","integer_deficient","integer_square","integer_cube","integer_power","integer_root","integer_logarithm",
  "integer_modulus","integer_divisor","integer_multiple","integer_gcd","integer_lcm",
  // Integer modifiers
  "Math", // Math functions
  "abs","ceil","floor","round","trunc","sign","pow","sqrt","cbrt","tsrt","exp","expm1","log","log1p","log2","log10",
  "sin","cos","tan","asin","acos","atan","atan2","sinh","cosh","tanh","asinh","acosh","atanh",
  "random","min","max","hypot","clz32","fround","mean","median","mode","variance","stddev","covariance","correlation","zscore","percentile","quantile",
  "gcd","lcm","factorial","fibonacci","isPrime","isComposite","isEven","isOdd","isPerfect","isAbundant","isDeficient","isSquare","isCube","isPower","isRoot","isLogarithm",
  "modulus","divisor","multiple",
  // More complicated Math functions
  "derivative","integral","limit","series","sequence","summation","product","permutation","combination",
  "matrix","vector","tensor","determinant","inverse","transpose","eigenvalue","eigenvector",
  "graph","tree","node","edge","path","cycle","connected","component",
  "dt","fn","cfn" // Data and function calling
]; // Keywords
const tokens = 
  ["?o_plus","?o_minus","?o_tiply","?o_div","?o_exp","o_mod",
  "?c_parin","?c_parout","?c_brkin","?c_brkout","?c_cbkin","?c_cbkout","c_jpbin","c_jpbout",
  "?assign","?b_equal","?b_equalStrict","?b_notEqual","?b_notEqualStrict",
  "?b_less","?b_more","?b_lessEqual","?b_moreEqual",
  "?g_not","g_or","g_and","g_xor",
  "?b_not","?b_xor","?b_or","?b_and",
  "?f_get",
  "?s_comment","?s_command","?s_small","?s_large","?s_medium",
  "?m_nest","?m_node","?m_port",
  "?d_var","?d_let","?d_const","?d_gl","?d_conf",
  "?t_class","?t_id","?t_bitstring",
  "?k_function","?k_return","?k_if","?k_else","?k_while","?k_for","?k_break","?k_continue","?k_switch","?k_case","?k_default","?k_try","?k_catch","?k_finally","?k_concurrent","?k_match",
  "?k_import","?k_export","?k_from","?k_as","?k_extends","?k_super","?k_this",
  "?k_new","?k_delete","?k_in","?k_of","?k_instanceof",
  "?t_string","?t_insert","?t_removed","?t_replace","?t_strigify","?t_strigparse","?t_strigmatch","?t_strigsearch","?t_strigsplit","?t_strigjoin","?t_strigtrim","?t_strigpadstart","?t_strigpadend","?t_strigtolowercase","?t_strigtouppercase","?t_stringsplit","?t_stringreplace",
  "?t_array","?t_insert","?t_removed","?t_replace","?t_arrayify","?t_arrayparse","?t_arraymatch","?t_arraysearch","?t_arraysplit","?t_arrayjoin","?t_arraytrim","?t_arraypadstart","?t_arraypadend",
  "?t_object","?t_insert","?t_removed","?t_replace","?t_objectify","?t_objectparse","?t_objectmatch","?t_objectsearch","?t_objectsplit","?t_objectjoin","?t_objecttrim",
  "?i_number","?i_bit_length","?i_bit_endian","?i_bit_signed","?i_bit_unsigned","?i_bit_float","?i_bit_double","?i_bit_int8","?i_bit_int16","?i_bit_int32","?i_bit_int64","?i_bit_uint8","?i_bit_uint16","?i_bit_uint32","?i_bit_uint64",
  "?i_bit_float32","?i_bit_float64","?i_bit_bigint64","?i_bit_biguint64",
  "?i_bit_string","?i_bit_array","?i_bit_object","?i_int_unsigned","?i_int_signed","?i_int_float","?i_int_double","?i_int_bigint","?i_int8","?i_int16","?i_int32","?i_int64","?i_uint8","?i_uint16","?i_uint32","?i_uint64",
  "?i_float32","?i_float64","?i_bigint64","?i_biguint64",
  "?i_string_string","?i_string_array","?i_string_object","?i_custom_length","?i_custom_endian","?i_custom_signed","?i_custom_unsigned","?i_custom_float","?i_custom_double","?i_custom_int8","?i_custom_int16","?i_custom_int32","?i_custom_int64","?i_custom_uint8","?i_custom_uint16","?i_custom_uint32","?i_custom_uint64",
  "?i_custom_float32","?i_custom_float64","?i_custom_bigint64","?i_custom_biguint64",
  "?i_custom_string","?i_custom_array","?i_custom_object","?i_integer_imaginary","?i_integer_real","?i_integer_complex","?i_integer_rational","?i_integer_prime","?i_integer_composite","?i_integer_even","?i_integer_odd",
  "?i_integer_fibonacci","?i_integer_factorial","?i_integer_perfect","?i_integer_abundant","?i_integer_deficient","?i_integer_square","?i_integer_cube","?i_integer_power","?i_integer_root","?i_integer_logarithm",
  "?i_integer_modulus","?i_integer_divisor","?i_integer_multiple","?i_integer_gcd","?i_integer_lcm",
  "?m_Math",
  "?m_abs","?m_ceil","?m_floor","?m_round","?m_trunc","?m_sign","?m_pow","?m_sqrt","?m_cbrt","?m_tsrt","?m_exp","?m_expm1","?m_log","?m_log1p","?m_log2","?m_log10",
  "?m_sin","?m_cos","?m_tan","?m_asin","?m_acos","?m_atan","?m_atan2","?m_sinh","?m_cosh","?m_tanh","?m_asinh","?m_acosh","?m_atanh",
  "?m_random","?m_min","?m_max","?m_hypot","?m_clz32","?m_fround","?m_mean","?m_median","?m_mode","?m_variance","?m_stddev","?m_covariance","?m_correlation","?m_zscore","?m_percentile","?m_quantile",
  "?m_gcd","?m_lcm","?m_factorial","?m_fibonacci","?m_isPrime","?m_isComposite","?m_isEven","?m_isOdd","?m_isPerfect","?m_isAbundant","?m_isDeficient","?m_isSquare","?m_isCube","?m_isPower","?m_isRoot","?m_isLogarithm",
  "?m_modulus","?m_divisor","?m_multiple",
  "?c_derivative","?c_integral","?c_limit","?c_series","?c_sequence","?c_summation","?c_product","?c_permutation","?c_combination",
  "?c_matrix","?c_vector","?c_tensor","?c_determinant","?c_inverse","?c_transpose","?c_eigenvalue","?c_eigenvector",
  "?g_graph","?g_tree","g_node","g_edge","g_path","g_cycle","g_connected","g_component",
  "?c_dt","?c_fn","?c_cfn"
  ]; // Tokens
let data  = {};