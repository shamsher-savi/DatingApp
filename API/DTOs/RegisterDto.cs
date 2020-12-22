using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage="Username is mandatory")]
        public string UserName { get; set; }

        [Required(ErrorMessage="Password is mandatory")]
        public string Password { get; set; }
    }
}