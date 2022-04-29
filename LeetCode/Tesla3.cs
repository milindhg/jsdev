using System.Linq;
using System;

namespace ArgsProblem.Tests
{
    public class ValidateArguments
    {
        public int Validate(string[] args)
        {
            if(args==null || args.Length==0) return -1;
            int i=0;
            bool flag = true;
            bool helpFlag = false;
            int nameResult = -2;
            int countResult = -2;
            while(flag && i<args.Length){
                switch(args[i].ToLower())   {
                    case "--help": 
                        helpFlag = true;
                        i++;
                        break;
                    case "--name":
                         nameResult = ValidateNameParam(args, i);
                         if(nameResult==0) 
                            i+=2;
                         else 
                            return -1;
                         break;
                    case "--count":
                         countResult = ValidateCountParam(args, i);
                         if(countResult==0)
                            i+=2;
                         else 
                            return -1;
                         break;
                    default:
                        return -1;
                }
            }
            if(helpFlag) return 1;
            else return 0;
            //throw new System.ArgumentException("Not yet implemented");
        }
        
        
        private int ValidateNameParam(string[] args, int i){
            int len = args.Length;
            if(i>=len-1) 
                return -1;
            string nameVal = args[i+1];
            if(nameVal == "--count" || nameVal == "--help") 
                return -1;
            if(nameVal.Length > 10 || nameVal.Length<3) 
                return -1;
            return 0;
        }

        private int ValidateCountParam(string[] args, int i){
            int len = args.Length;
            if(i>=len-1) return -1;
            string countVal = args[i+1];
            if(countVal == "--name" || countVal == "--help") return -1;
            int number;
            bool success = Int32.TryParse(countVal, out number);
            if(success){
                if(number > 100 || number<10) return -1;
                return 0;
            }
            return -1;
            
        }


    }
}