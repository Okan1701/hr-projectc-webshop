

using System.ComponentModel.DataAnnotations;

namespace klaas.Models{
    public class login{

        [Required, EmailAddress]
        public string Email {get; set;}

        [Required, DataType(DataType.Password)]
        public string Password {get; set;}

        [Display(Name = "RememberMe")]
        public bool RememberMe {get; set;}
    }
}