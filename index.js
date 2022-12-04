function cons(){
    var objShell = new ActiveXObject("Shell.Application");
    objShell.ShellExecute("mongosh.exe", "C: cd C:\\pr main.exe blablafile.txt auto", "C:\\mongosh-1.6.0-win32-x64\\bin", "open", "1");
}
 
//NOTE: ONLY WORKS ON WINDOWS AS I KNOW OF

//var {spawn}=require('child_process')

//function cons(){
 //   let temporal =spawn('cmd',['/c', 'start c:\\mongosh-1.6.0-win32-x64\\bin\\mongosh'])

//}


    
