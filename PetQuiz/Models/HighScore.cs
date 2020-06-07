using System;

namespace PetQuiz.Models
{
    public class HighScore
    {
        public string NickName { get; set; }
        public int Score { get; set; }
        public DateTime TimePlayed { get; set; }
    }
}
