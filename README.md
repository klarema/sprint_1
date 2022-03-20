# Node basics (S1)
ITAcademy Node.js 

### Node Utils: How to encode, encrypt and decryt files

https://github.com/klarema/sprint_1/blob/main/entrega_1_5_NodeUtils.js

1. To create a source file, use the ***writeToFile function*** to write text to a file
    1. this requires 2 parameter: path to file name, text input
    2. Example use : writeToFile("./myNewFile.txt", "text in the file")
    3. Expect: a file "myNewFile" is created in the current directory. It contains the text. 
2. To create new files from the new file, one encoded in Hex, one encoded in Base64, use the ***encodedFile function***
    1. this requires one parameter: the path to the file that will be encoded
    2. Example use: encodedFile("./myNewFile.txt")
    3. Expect: 2 files created, named "encodedHexFile.txt" and "encodedBase64File.txt"
    4. the content of the file "encodedHexFile.txt" is encoded in Hexidecimal
    5. the content of the file "encodedBase64File.txt" is encoded in Base64
3. To create new encrypted files from the encoded files and delete the encoded files, use the ***encryptFile function*** 
    1. this requires 2 parmeters: path to the file encoded in Hexidecimal, path to the file encoded in Base64
    2. Example use: encryptFile("./encodedHexFile.txt", "./encodedBase64File.txt")
    3. Expect: new files created(), encrypted using the aes-192-cbc algorithm. The Hex and Base64 files have been deleted
4. To create new decoded and decrypted files from the encrypted file, use the ***decryptFile function*** 
    1. this requires 1 parmeters: path to a file encypted in Hexidecimal or Base64
    2. Example use: decryptFile("./encryptedHexFile.txt")
    3. Expect: a new file created
    4. This file is decrypted and decoded. Itt is in the same state as the source file, containing text (utf8)
