import hashlib

# 两个数字转换为字符串
num1_str = "9219324250543668366"
num2_str = "1753800319896"

# 字符串拼接
combined_str = 'r=432196&t=1753800319896'+'{"match_id":"9219324250543668366","season":"S20","uid":"76561198082537409"}' # 结果："92193242505436683661753800319896"

# 计算 SHA-1 哈希（UTF-8 编码）
sha1_hash = hashlib.sha1(combined_str.encode('utf-8')).hexdigest()

print(sha1_hash)  # 输出：b63cf88c7b4a926c3740b4e91fecad57ea9eac4b