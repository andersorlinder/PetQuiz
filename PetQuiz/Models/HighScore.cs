using System;
using System.ComponentModel.DataAnnotations;

namespace PetQuiz.Models
{
    public class HighScore
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string NickName { get; set; }
        [Required]
        public int Score { get; set; }
        [Required]
        public DateTime TimePlayed { get; set; }
    }
}
